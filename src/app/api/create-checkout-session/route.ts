import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { lineItems } = body;
        console.log("POST lineItems:", lineItems);
        if (!lineItems || lineItems.length === 0) {
            return new Response(
                JSON.stringify({ error: "No items in the cart." }),
                { status: 400 },
            );
        }

        // Convert cart items to Stripe line items
        const stripeLineItems = lineItems.map((item: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.productName,
                    images: item.images,
                },
                unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
            },
            quantity: item.quantity,
        }));
        const metadata = {
            products: JSON.stringify(
                lineItems.map((item: any) => ({
                    imageUrl: item.images[0],
                })),
            ),
        };
        // dataStorage.push(stripeLineItems);
        // Create a Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: stripeLineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            metadata,
            // customer_email: lineItems.customer_email,
        });

        return new Response(JSON.stringify({ id: session.id }), {
            status: 200,
        });
    } catch (error: any) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500 },
        );
    }
}
export async function GET(request: Request) {
    // Lấy session_id từ query string
    const { searchParams } = new URL(request.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
        console.log("Session ID missing in request.");
        return NextResponse.json(
            { error: "Session ID is required" },
            { status: 400 },
        );
    }

    try {
        // Lấy thông tin session từ Stripe
        const session = await stripe.checkout.sessions.retrieve(session_id);
        console.log("Stripe session:", session);
        // Lấy thêm danh sách sản phẩm trong session
        const lineItems = await stripe.checkout.sessions.listLineItems(
            session_id,
        );
        // const products = lineItems.data.map((item: any) => ({
        //     description: item?.description || "",
        //     currency: item?.currency,
        //     quantity: item.quantity,
        // }));
        const metadataProducts = JSON.parse(session.metadata?.products || "[]");

        // Lặp qua lineItems và ánh xạ với metadataProducts
        const mappedLineItems = lineItems.data.map(
            (item: any, index: number) => {
                const productImage = metadataProducts[index]?.imageUrl || ""; // Lấy ảnh tương ứng theo index
                return {
                    description: item?.description || "",
                    currency: item?.currency || "",
                    quantity: item.quantity || 0,
                    imageUrl: productImage, // Thêm URL ảnh vào đây
                };
            },
        );
        console.log("Stripe line items:", lineItems);
        return NextResponse.json(
            {
                id: session.id,
                amount_total: session.amount_total,
                status: session.status,
                email: session.customer_details?.email || "",
                name: session.customer_details?.name || "",
                // products,
                mappedLineItems,
            },
            { status: 200 },
        );
    } catch (error: any) {
        console.error("Error fetching session:", error.message);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
