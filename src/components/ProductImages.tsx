"use client";
import Image from "next/image";
import React, { use, useState } from "react";

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/2647990/pexels-photo-2647990.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/1646178/pexels-photo-1646178.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];
const ProductImages = () => {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <div className='h-[500px] relative'>
                <Image
                    src={images[index].url}
                    alt=''
                    fill
                    className='object-cover rounded-xl'
                    sizes='50vw'
                />
            </div>
            <div className='flex justify-between gap-4'>
                {images.map((image, i) => (
                    <div
                        className='w-1/4 h-32 relative gap-4 mt-8  cursor-pointer'
                        key={image.id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={image.url}
                            alt=''
                            fill
                            className='object-cover rounded-xl'
                            sizes='30vw'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
