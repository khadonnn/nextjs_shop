"use client";
import { pre } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const Add = ({
    productId,
    variantId,
    stockNumber,
}: {
    productId: string;
    variantId: string;
    stockNumber: number;
}) => {
    console.log(stockNumber);
    const [quantity, setQuantity] = useState(1);
    //TEMPORARY
    // const stock = 4;
    //addition
    useEffect(() => {
        // Chỉ cập nhật quantity nếu nó vượt quá stockNumber
        setQuantity((prevQuantity) => {
            if (stockNumber < 1) {
                return 1;
            }
            if (prevQuantity > stockNumber) {
                return stockNumber;
            }
            return prevQuantity;
        });
    }, [stockNumber]);
    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1);
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-medium'>Choose a Quantity</h4>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
                        <button
                            className='cursor-pointer text-xl disabled:opacity-30 disabled:cursor-not-allowed'
                            onClick={() => handleQuantity("d")}
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        {quantity}
                        <button
                            className='cursor-pointer text-xl disabled:opacity-30 disabled:cursor-not-allowed'
                            onClick={() => handleQuantity("i")}
                            disabled={quantity >= stockNumber}
                        >
                            +
                        </button>
                    </div>
                    {/* stockNumber<1 ? (out of stock) */}
                    <div className='text-xs'>
                        Only{" "}
                        <span className='text-orange-500'>
                            {stockNumber} items
                        </span>{" "}
                        left! <br />
                        {"Don't"} miss it
                    </div>
                </div>
                <button className='w-36 text-sm rounded-3xl ring-1 ring-cart text-cart py-2 px-4 hover:bg-cart hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Add;
