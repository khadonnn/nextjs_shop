"use client";
import { useHorizontalScroll } from "@/hook/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
    const scrollRef = useHorizontalScroll<HTMLDivElement>();
    return (
        <div
            ref={scrollRef}
            className='overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide'
        >
            <div className='flex gap-4 md:gap-8 '>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
                <Link
                    href='/list?cat=test'
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                >
                    <div className='relative bg-slate-100 w-full h-96 '>
                        <Image
                            src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            fill
                            sizes='20vw'
                            className='object-cover'
                        />
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>
                        Category name
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Categories;
