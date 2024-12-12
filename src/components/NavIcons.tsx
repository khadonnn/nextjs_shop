"use client";
import CartModal from "@/components/CartModal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  //TEMPORARY
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
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
      />
      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-10 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
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
