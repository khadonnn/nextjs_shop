import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
    return (
        <div className='flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link
                href='/test'
                className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
            >
                <div className='relative w-full h-80'>
                    <Image
                        src='https://images.pexels.com/photos/18031077/pexels-photo-18031077/free-photo-of-cac-toa-nha-cay-d-i-qu-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src='https://images.pexels.com/photos/29334426/pexels-photo-29334426/free-photo-of-ng-i-ph-n-c-m-hoa-t-dinh-h-ng-tr-ng-ngoai-tr-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md  '
                    />
                </div>
                <div className='flex justify-between'>
                    <span className=' font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <div className='rounded-2xl ring-1 ring-cart text-cart w-max py-2 px-4 text-xs hover:bg-cart hover:text-white'>
                    Add to cart
                </div>
            </Link>
            <Link
                href='/test'
                className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
            >
                <div className='relative w-full h-80'>
                    <Image
                        src='https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src='https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md '
                    />
                </div>
                <div className='flex justify-between'>
                    <span className=' font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <div className='rounded-2xl ring-1 ring-cart text-cart w-max py-2 px-4 text-xs hover:bg-cart hover:text-white'>
                    Add to cart
                </div>
            </Link>
            <Link
                href='/test'
                className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
            >
                <div className='relative w-full h-80'>
                    <Image
                        src='https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src='https://images.pexels.com/photos/18031077/pexels-photo-18031077/free-photo-of-cac-toa-nha-cay-d-i-qu-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md '
                    />
                </div>
                <div className='flex justify-between'>
                    <span className=' font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <div className='rounded-2xl ring-1 ring-cart text-cart w-max py-2 px-4 text-xs hover:bg-cart hover:text-white'>
                    Add to cart
                </div>
            </Link>
            <Link
                href='/test'
                className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
            >
                <div className='relative w-full h-80'>
                    <Image
                        src='https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src='https://images.pexels.com/photos/18031077/pexels-photo-18031077/free-photo-of-cac-toa-nha-cay-d-i-qu-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md '
                    />
                </div>
                <div className='flex justify-between'>
                    <span className=' font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <div className='rounded-2xl ring-1 ring-cart text-cart w-max py-2 px-4 text-xs hover:bg-cart hover:text-white'>
                    Add to cart
                </div>
            </Link>
        </div>
    );
};

export default ProductList;
