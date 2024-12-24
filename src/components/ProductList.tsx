import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "@/components/Pagination";
import React, { Suspense } from "react";
const PRODUCT_PER_PAGE = 8;
const ProductList = async ({
    categoryId,
    limit,
    searchParams,
}: {
    categoryId: string;
    limit?: number;
    searchParams?: any;
}) => {
    const WixClient = await wixClientServer();
    let productQuery = WixClient.products //change const to let
        .queryProducts()
        .startsWith("name", searchParams?.name || "")
        .eq("collectionIds", categoryId) // (wix-properties, tham so)
        .hasSome("productType", [searchParams?.type || "physical", "digital"])
        .gt("priceData.price", searchParams?.min || 0)
        .lt("priceData.price", searchParams?.max || 1000)
        .limit(limit || PRODUCT_PER_PAGE)
        .skip(
            searchParams?.page
                ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
                : 0,
        );
    // .find();
    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" "); //tach asc or desc price va luu vao 2 bien sortType va sortBy
        console.log(sortType, sortBy);
        if (sortType === "asc") {
            productQuery = productQuery.ascending(sortBy);
        }
        if (sortType === "desc") {
            productQuery = productQuery.descending(sortBy);
        }
    }

    // console.log(res.items[0]);

    const res = await productQuery.find();
    // console.log(res);
    return (
        <div className='flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap'>
            {res.items.map((product: products.Product) => (
                <Link
                    key={product._id}
                    href={"/" + product.slug}
                    className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
                >
                    <div className='relative w-full h-80'>
                        <Image
                            src={
                                product.media?.mainMedia?.image?.url ||
                                "/product.png"
                            }
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                        />
                        {product.media?.items && (
                            <Image
                                src={
                                    product.media?.items[1]?.image?.url ||
                                    "/product.png"
                                }
                                alt=''
                                fill
                                sizes='25vw'
                                className='absolute object-cover rounded-md  '
                            />
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <span className=' font-medium'>{product.name}</span>
                        <span className='font-semibold'>
                            ${product.priceData?.price}
                        </span>
                    </div>
                    {product.additionalInfoSections && (
                        <div
                            className='text-sm text-gray-500'
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    product.additionalInfoSections.find(
                                        (section: any) =>
                                            section.title == "shortDesc",
                                    )?.description || "",
                                ),
                            }}
                        ></div>
                    )}
                    <div className='rounded-2xl ring-1 ring-cart text-cart w-max py-2 px-4 text-xs hover:bg-cart hover:text-white'>
                        Add to cart
                    </div>
                </Link>
            ))}
            <Suspense fallback={"loading..."}>
                <Pagination
                    currentPage={res.currentPage || 0}
                    hasPrev={res.hasPrev()}
                    hasNext={res.hasNext()}
                />
            </Suspense>
        </div>
    );
};

export default ProductList;
