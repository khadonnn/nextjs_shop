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
