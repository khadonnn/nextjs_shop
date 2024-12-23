import { useWixClient } from "@/hook/useWixClient";
import Image from "next/image";
import React, { useEffect } from "react";

const CartModal = () => {
    const cartItems = true;

    const wixClient = useWixClient();
    useEffect(() => {
        const getCart = async () => {
            const response = await wixClient.currentCart.getCurrentCart();
            // console.log(response);
        };
        getCart();
    }, [wixClient]);
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-10 right-0 flex flex-col gap-6 z-20'>
            {!cartItems ? (
                <div>Cart is empty</div>
            ) : (
                <>
                    <h2 className='text-xl'>Shopping Cart</h2>
                    <div className='flex flex-col gap-6'>
                        {/* ITEM */}
                        <div className='flex gap-4'>
                            <Image
                                src='https://images.pexels.com/photos/18031077/pexels-photo-18031077/free-photo-of-cac-toa-nha-cay-d-i-qu-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                alt=''
                                width={72}
                                height={96}
                                className='object-cover rounded-md'
                            />
                            <div className='flex flex-col justify-between w-full'>
                                {/* TOP */}
                                <div>
                                    {/* TITLE */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>
                                            Product Name
                                        </h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>
                                            $49
                                        </div>
                                    </div>
                                    {/* DESC */}
                                    <div className='text-sm text-gray-500'>
                                        available
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty.2</span>
                                    <span className='text-blue-500'>
                                        Remove
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* ITEM */}
                        <div className='flex gap-4'>
                            <Image
                                src='https://images.pexels.com/photos/18031077/pexels-photo-18031077/free-photo-of-cac-toa-nha-cay-d-i-qu-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                alt=''
                                width={72}
                                height={96}
                                className='object-cover rounded-md'
                            />
                            <div className='flex flex-col justify-between w-full'>
                                {/* TOP */}
                                <div>
                                    {/* TITLE */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>
                                            Product Name
                                        </h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>
                                            $49
                                        </div>
                                    </div>
                                    {/* DESC */}
                                    <div className='text-sm text-gray-500'>
                                        available
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty.2</span>
                                    <span className='text-blue-500'>
                                        Remove
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BOTTOM */}
                    <div>
                        <div className='flex items-center justify-between font-semibold'>
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb-4'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <div className='flex justify-between text-sm'>
                            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                                View Cart
                            </button>
                            <button className='rounded-md py-3 px-4 bg-black text-white'>
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModal;
