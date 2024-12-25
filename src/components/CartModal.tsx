import { useCartStore } from "@/hook/useCartStore";
import Image from "next/image";
import React from "react";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hook/useWixClient";
import { currentCart } from "@wix/ecom";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);
const CartModal = () => {
    //TEMPORAry
    // const cartItems = true;
    const wixClient = useWixClient();
    const { cart, isLoading, removeItem } = useCartStore();
    //handle
    const handleCheckout = async () => {
        const stripe = await stripePromise;
        if (!stripe) return;
        if (!cart.lineItems) return;
        const lineItems = cart.lineItems.map((item) => ({
            productName: item.productName?.original,
            images: item.image
                ? [wixMedia.getScaledToFillImageUrl(item.image, 400, 400, {})]
                : ["https://via.placeholder.com/150"],
            price: item.price?.amount,
            quantity: item.quantity,
        }));
        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lineItems }),
        });

        const { id } = await response.json();
        // Redirect to Stripe Checkout
        if (id) {
            await stripe.redirectToCheckout({ sessionId: id });
        } else {
            console.error("Failed to create checkout session.");
        }
    };

    // console.log(cart);
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-10 right-0 flex flex-col gap-6 z-20'>
            {!cart.lineItems ? (
                <div>Cart is empty</div>
            ) : (
                <>
                    <h2 className='text-xl'>Shopping Cart</h2>
                    <div className='flex flex-col gap-6'>
                        {/* ITEM */}
                        {cart.lineItems.map((item) => (
                            <div className='flex gap-4' key={item._id}>
                                {item.image && (
                                    <Image
                                        src={wixMedia.getScaledToFillImageUrl(
                                            item.image,
                                            72,
                                            96,
                                            {},
                                        )}
                                        alt=''
                                        width={72}
                                        height={96}
                                        className='object-cover rounded-md'
                                    />
                                )}
                                <div className='flex flex-col justify-between w-full'>
                                    {/* TOP */}
                                    <div>
                                        {/* TITLE */}
                                        <div className='flex items-center justify-between gap-8'>
                                            <h3 className='font-semibold'>
                                                {item.productName?.original}
                                            </h3>
                                            <div className='p-1 rounded-sm flex items-center justify-center gap-2'>
                                                {item.quantity &&
                                                    item.quantity > 1 && (
                                                        <div className='text-xs text-green-500'>
                                                            {item.quantity}x
                                                        </div>
                                                    )}{" "}
                                                ${item.price?.amount}
                                            </div>
                                        </div>
                                        {/* DESC */}
                                        <div className='text-sm text-gray-500'>
                                            {/* {item.availability?.status} */}
                                            {(() => {
                                                switch (
                                                    item.availability?.status
                                                ) {
                                                    case "AVAILABLE":
                                                        return "Sản phẩm có sẵn";
                                                    case "NOT_AVAILABLE":
                                                        return "Sản phẩm không có sẵn";
                                                    case "NOT_FOUND":
                                                        return "Sản phẩm không tìm thấy";
                                                    case "PARTIALLY_AVAILABLE":
                                                        return "Sản phẩm có sẵn một phần";
                                                    default:
                                                        return "Trạng thái không rõ";
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    {/* BOTTOM */}
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-gray-500'>
                                            Qty. {item.quantity}
                                        </span>
                                        <span
                                            className='text-blue-500 '
                                            style={{
                                                cursor: isLoading
                                                    ? "not-allowed"
                                                    : "pointer",
                                            }}
                                            onClick={() =>
                                                removeItem(wixClient, item._id!)
                                            }
                                        >
                                            Remove
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* ITEM */}
                    </div>
                    {/* BOTTOM */}
                    <div>
                        <div className='flex items-center justify-between font-semibold'>
                            <span>Tổng: </span> {/* SUBTOTAL */}
                            <span>
                                $
                                {
                                    (
                                        cart as currentCart.Cart & {
                                            subtotal?: { amount: number };
                                        }
                                    ).subtotal?.amount
                                }
                            </span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb-4'>
                            Phí vận chuyển sẽ được tính tại bước thanh toán
                        </p>
                        <div className='flex justify-between text-sm'>
                            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                                View Cart
                            </button>
                            <button
                                className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-80'
                                disabled={isLoading}
                                onClick={handleCheckout}
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModal;
