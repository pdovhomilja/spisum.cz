import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-row bg-[rgb(196,156,94)] text-white  items-center justify-center mx-auto w-full">
      <div className="pl-5">
        <Image
          className="object-cover"
          src="/images/svd-logo2.png"
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="flex w-full items-center justify-center mx-auto ">
        <div className="space-x-8">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </div>
      <div className="flex flex-row space-x-2 px-2">
        <SocialIcon url="https://www.facebook.com/SeaViewDevelopment/" />
        <SocialIcon url="https://www.instagram.com/seaviewdevelopment/" />
        <SocialIcon url="https://twitter.com/SeaViewDev" />
      </div>
    </div>
  );
}

export default Header;
