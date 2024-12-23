import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import React, { Suspense } from "react";

const ListPage = async ({ searchParams }: any) => {
    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.getCollectionBySlug(
        searchParams.cat || "all-products",
    );

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* CAMPAIGN */}
            <div className='bg-pink-50 p-4  justify-between h-64 hidden sm:flex'>
                <div className='w-2/3 flex flex-col  items-center justify-center  gap-8'>
                    <h1 className='text-4xl font-semibold leadingg-[48px] text-gray-700'>
                        Grab up to 50% off on
                        <br /> Selected Products
                    </h1>
                    <button className='rounded-3xl w-max bg-cart text-white py-3 px-5 text-sm'>
                        Buy Now
                    </button>
                </div>
                <div className='relative w-1/3'>
                    <Image
                        src='/woman.png'
                        alt=''
                        className='object-contain'
                        fill
                    />
                </div>
            </div>
            {/* FILTER */}
            <Filter />
            {/* PRODUCST */}
            <h1 className='mt-12 text-xl font-semibold '>
                {cat?.collection?.name} For You!
            </h1>
            <Suspense fallback={"loading..."}>
                <ProductList
                    categoryId={
                        cat.collection?._id ||
                        "00000000-000000-000000-000000000001"
                    }
                    searchParams={searchParams} //?cat==all-products&type=digital&min=10&max=1000
                />
            </Suspense>
        </div>
    );
};

export default ListPage;
