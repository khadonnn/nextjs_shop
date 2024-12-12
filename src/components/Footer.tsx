import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className='py-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24'>
            {/* TOP */}
            <div className='flex justify-between gap-24 flex-col md:flex-row'>
                {/* LEFT */}
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-start gap-8 md:items-start lg:items-start sm:items-center '>
                    <Link href='/'>
                        {" "}
                        <div className='text-2xl tracking-wide'>STORE</div>
                    </Link>
                    <p>HCM, VietNam</p>
                    <span className='font-semibold'>khadon@gmail.com</span>
                    <span className='font-semibold'>+84 123 456 789</span>
                    <div className='flex gap-6'>
                        <Image
                            src='/facebook.svg'
                            alt=''
                            width={16}
                            height={16}
                        />
                        <Image
                            src='/instagram.svg'
                            alt=''
                            width={16}
                            height={16}
                        />
                        <Image
                            src='/youtube.svg'
                            alt=''
                            width={16}
                            height={16}
                        />
                        <Image
                            src='/pinterest.svg'
                            alt=''
                            width={16}
                            height={16}
                        />
                        <Image src='/x.png' alt='' width={16} height={16} />
                    </div>
                </div>

                {/* CENTER */}
                <div className='hidden lg:flex justify-between w-1/2'>
                    <div className='flex flex-col justify-between'>
                        <h1 className='font-medium text-lg'>COMPANY</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href=''>About Us</Link>
                            <Link href=''>Careers</Link>
                            <Link href=''>Affiliates</Link>
                            <Link href=''>Blog</Link>
                            <Link href=''>Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className='font-medium text-lg'>SHOP</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href=''>New Arrivals</Link>
                            <Link href=''>Accessories</Link>
                            <Link href=''>Men</Link>
                            <Link href=''>Women</Link>
                            <Link href=''>All Products</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className='font-medium text-lg'>HELP</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href=''>Customer Service</Link>
                            <Link href=''>My Account</Link>
                            <Link href=''>Find a Store</Link>
                            <Link href=''>Legal & Privacy</Link>
                            <Link href=''>Gift Card</Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 '>
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, soluta!
                    </p>
                    <div className='flex'>
                        <input
                            type='text'
                            placeholder='Email address'
                            className='p-4 w-3/4'
                        />
                        <button className='w-1/4 bg-cart text-white'>
                            JOIN
                        </button>
                    </div>
                    <span className='font-semibold'>Secure Payments</span>
                    <div className='flex justify-between'>
                        <Image
                            src='/paypal.png'
                            alt=''
                            width={40}
                            height={20}
                        />
                        <Image
                            src='/mastercard.png'
                            alt='master'
                            width={40}
                            height={20}
                        />
                        <Image
                            src='/visa.png'
                            alt=''
                            width={40}
                            height={20}
                            style={{
                                width: "40px",
                                height: "20px",
                                objectFit: "contain",
                            }}
                        />
                        <Image
                            src='/momo.svg'
                            alt=''
                            width={40}
                            height={20}
                            style={{
                                width: "40px",
                                height: "20px",
                                objectFit: "contain",
                            }}
                        />
                        <Image
                            src='/zalo.svg'
                            alt=''
                            width={40}
                            height={20}
                            style={{
                                width: "40px",
                                height: "20px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM  flex flex-col items-start justify-between gap-8 mt-16 sm:items-center md:flex-row*/}

            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
                <div className=''>© 2024 KhaDon Store</div>
                <div className='flex flex-col gap-8 md:flex-row'>
                    <div className=''>
                        <span className='text-gray-500 mr-4'>Language</span>
                        <span className='font-medium'>
                            VIET NAM | Vietnamese
                        </span>
                    </div>
                    <div className=''>
                        <span className='text-gray-500 mr-4'>Currency</span>
                        <span className='font-medium'>$ Dong</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
