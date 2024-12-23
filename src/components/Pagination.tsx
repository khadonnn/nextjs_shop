"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({
    currentPage,
    hasPrev,
    hasNext,
}: {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams); //url : &name=value
        params.set("page", pageNumber.toString()); //gan lai &name=value
        replace(`${pathname}?${params.toString()}`);
    };
    const showButtons = pathname.includes("/list") && searchParams.has("cat");
    return (
        <>
            {showButtons && (
                <div className='mt-12 flex justify-between w-full'>
                    <button
                        className='rounded-md bg-cart text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200'
                        disabled={!hasPrev}
                        onClick={() => createPageUrl(currentPage - 1)}
                    >
                        Previous
                    </button>
                    <button
                        className='rounded-md bg-cart text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200'
                        disabled={!hasNext}
                        onClick={() => createPageUrl(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default Pagination;
