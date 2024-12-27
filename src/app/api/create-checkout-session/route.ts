import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { lineItems } = body;
        console.log(lineItems);
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

        // Create a Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: stripeLineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            customer_email: body.customer_email,
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
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    // Kiểm tra và lấy `id` từ query params
    const session_id = Array.isArray(req.query.session_id)
        ? req.query.session_id[0]
        : req.query.id;
    console.log(`Session ID: ${session_id}`);

    // Kiểm tra tính hợp lệ của id
    if (!session_id || typeof session_id !== "string") {
        return res.status(400).json({ error: "Invalid session ID" });
    }

    try {
        // Lấy session từ Stripe
        const session = await stripe.checkout.sessions.retrieve(session_id);

        // Kiểm tra session nếu không tồn tại
        if (!session) {
            return res.status(404).json({ error: "Session not found" });
        }

        // Lấy line items từ session
        const lineItems = await stripe.checkout.sessions.listLineItems(
            session_id,
        );

        // Log session chi tiết
        console.log("Session Details:", session);

        // Trả về kết quả dưới dạng JSON
        return res.status(200).json({ session, lineItems });
    } catch (error: any) {
        // Log chi tiết lỗi
        console.error("Error retrieving session:", error);

        // Trả về lỗi cho client
        return res
            .status(500)
            .json({ error: error.message || "Failed to retrieve session" });
    }
}
