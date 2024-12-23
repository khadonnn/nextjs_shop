"use client"; // Đảm bảo đây là Client Component

import React from "react";
import useHorizontalScroll from "@/hook/useHorizontalScroll";

const CategoriesScroll = ({ children, ...props }: any) => {
    const scrollRef = useHorizontalScroll<HTMLDivElement>();

    return (
        <div ref={scrollRef} {...props}>
            {children}
        </div>
    );
};

export default CategoriesScroll;
