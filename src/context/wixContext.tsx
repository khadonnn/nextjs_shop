"use client";

import { createContext } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";

import Cookie from "js-cookie";

const refreshToken = JSON.parse(Cookie.get("refreshToken") || "{}");
const myWixClient = createClient({
    modules: {
        products,
        collections,
        currentCart,
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
        },
    }),
});

export type WixClient = typeof myWixClient; //dung lai kieu dinh nghia createClient
export const WixClientContext = createContext<WixClient>(myWixClient);
export const WixClientContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <WixClientContext.Provider value={myWixClient}>
            {children}
        </WixClientContext.Provider>
    );
};
