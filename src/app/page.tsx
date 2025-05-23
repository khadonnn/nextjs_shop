// "use client";
import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hook/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {
    // const WixClient = useWixClient();
    // useEffect(() => {
    //     const getProducts = async () => {
    //         const res = await WixClient.products.queryProducts().find();
    //         console.log(res);
    //     };
    //     getProducts();
    // }, [WixClient]);

    // const WixClient = await wixClientServer();
    // const res = await WixClient.products.queryProducts().find();
    // console.log(res);
    return (
        <div className=''>
            <Slider />
            <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                <h1 className='text-2xl'>Featured Products</h1>
                <Suspense fallback={"loading"}>
                    <ProductList
                        categoryId={process.env.FEATURE_PRODUCTS_CATELOGY_ID!}
                        limit={4}
                    />
                </Suspense>
            </div>
            <div className='mt-24  '>
                <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>
                    Categories
                </h1>
                <Suspense fallback={"loading"}>
                    <Categories />
                </Suspense>
                <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h1 className='text-2xl'>New Products</h1>
                    <ProductList
                        categoryId={process.env.FEATURE_PRODUCTS_CATELOGY_ID!}
                        limit={4}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
