"use client";
import CartModal from "@/components/CartModal";
import { useWixClient } from "@/hook/useWixClient";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const wixClient = useWixClient();

    //TEMPORARY
    // const isLoggedIn = false;

    const router = useRouter();
    const pathname = usePathname();
    const isLoggedIn = wixClient.auth.loggedIn();
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            setIsProfileOpen((prev) => !prev);
        }
    };
    // AUTH WITH WIX-MANAGED AUTH
    // const login = async () => {
    //     const loginRequestData = wixClient.auth.generateOAuthData(
    //         "http://localhost:3000",
    //     );
    //     console.log(loginRequestData);
    //     localStorage.setItem(
    //         "oAuthRedirecData",
    //         JSON.stringify(loginRequestData),
    //     );
    //     const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
    //     window.location.href = authUrl;
    // };
    const handleLogout = async () => {
        setIsLoading(true);
        Cookies.remove("refreshToken");
        const { logoutUrl } = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setIsProfileOpen(false);
        router.push(logoutUrl); //chuyen toi href cua onClick logout
    };
    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image
                className='cursor-pointer'
                src='/profile.png'
                alt=''
                width={22}
                height={22}
                onClick={handleProfile}
                // onClick={login}
            />
            {isProfileOpen && (
                <div className='absolute p-4 bg-white rounded-md top-10 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20'>
                    <Link href='/'>Profile</Link>
                    <div className='mt-2 cursor-pointer' onClick={handleLogout}>
                        {isLoading ? "Logging out" : "Logout"}
                    </div>
                </div>
            )}
            <Image
                className='cursor-pointer'
                src='/notification.png'
                alt=''
                width={22}
                height={22}
            />
            <div className='relative cursor-pointer'>
                <Image
                    className='cursor-pointer'
                    src='/cart.png'
                    alt=''
                    width={22}
                    height={22}
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />
                <div className='absolute -top-4 -right-4 w-6 h-6 bg-cart rounded-full text-white text-sm items-center justify-center flex'>
                    2
                </div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    );
};

export default NavIcons;
