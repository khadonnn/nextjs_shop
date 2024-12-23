"use client";
import React, { useEffect, useState } from "react";

import { products } from "@wix/stores";
import Add from "@/components/Add";
const CustomizeProducts = ({
    productId,
    variants,
    productOptions,
}: {
    productId: string;
    variants: products.Variant[];
    productOptions: products.ProductOption[];
}) => {
    const [selectedOptions, setSelectedOptions] = useState<{
        [key: string]: string;
    }>({});
    const [selectedVariant, setSelectedVariant] = useState<products.Variant>();
    useEffect(() => {
        const variant = variants.find((v) => {
            const variantChoices = v.choices;
            if (!variantChoices) return false;
            return Object.entries(selectedOptions).every(
                ([key, value]) => variantChoices[key] === value,
            );
        });
        setSelectedVariant(variant);
    }, [selectedOptions, variants]);
    const handleOptionSelect = (optionType: string, choice: string) => {
        setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
    };
    // console.log(variants);
    const isVariantInStock = (choices: { [key: string]: string }) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;
            if (!variantChoices) return false;
            return (
                Object.entries(choices).every(
                    ([key, value]) => variantChoices[key] === value,
                ) &&
                variant.stock?.inStock &&
                variant.stock?.quantity &&
                variant.stock?.quantity > 0
            );
        });
    };
    // console.log(selectedOptions);
    return (
        <div className='flex flex-col gap-6'>
            {productOptions.map((option: any) => (
                <div className='flex flex-col gap-4' key={option.name}>
                    <h4 className='font-medium'>Choose a {option.name}</h4>
                    <ul className='flex items-center gap-3'>
                        {option.choices?.map((choice: any) => {
                            const disabled = !isVariantInStock({
                                ...selectedOptions,
                                [option.name!]: choice.description,
                            });
                            const selected =
                                selectedOptions[option.name!] ===
                                choice.description;
                            const clickHandler = disabled
                                ? undefined
                                : () =>
                                      handleOptionSelect(
                                          option.name!,
                                          choice.description,
                                      );
                            return option.name === "Color" ? (
                                <li
                                    key={choice.description}
                                    className='w-8 h-8 rounded-full ring-1 ring-gray-300  relative bg-red-500'
                                    style={{
                                        backgroundColor: choice.value,
                                        cursor: disabled
                                            ? "not-allowed"
                                            : "pointer",
                                    }}
                                    onClick={clickHandler}
                                >
                                    {selected && (
                                        <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    )}
                                    {disabled && (
                                        <div className='absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    )}
                                </li>
                            ) : (
                                <li
                                    key={choice.description}
                                    className='ring-1 ring-cart text-cart rounded-md py-1 px-4 text-sm '
                                    style={{
                                        cursor: disabled
                                            ? "not-allowed"
                                            : "pointer",
                                        backgroundColor: selected
                                            ? "#f35c7a"
                                            : disabled
                                            ? "fbcfe8"
                                            : "white",
                                        color: selected ? "white" : "pink",
                                        // boxShadow: disabled ? "none" : "",
                                    }}
                                    onClick={clickHandler}
                                >
                                    {choice.description}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
            <Add
                productId={productId}
                variantId={
                    selectedVariant?._id ||
                    "00000000-0000-0000-0000-000000000000"
                }
                stockNumber={selectedVariant?.stock?.quantity || 0}
            />
            {/* COLOR */}
            {/* <h4 className='font-medium'>Choose a color</h4>
                    <ul className='flex items-center gap-3'>
                        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
                            <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        </li>
                        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'></li>
                        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300  relative cursor-not-allowed bg-green-500'>
                            <div className='absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        </li>
                    </ul> */}
            {/* OTHERs */}
            {/* <h4 className='font-medium'>Choose a size</h4>
            <ul className='flex items-center gap-3'>
                <li className='ring-1 ring-cart text-cart rounded-md py-1 px-4 text-sm cursor-pointer'>
                    Small
                </li>
                <li className='ring-1 ring-cart text-white bg-cart rounded-md py-1 px-4 text-sm cursor-pointer'>
                    Medium
                </li>
                <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed'>
                    Large
                </li>
            </ul> */}
        </div>
    );
};

export default CustomizeProducts;
