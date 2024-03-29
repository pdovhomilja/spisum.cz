"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import OrderButton from "./OrderButton";
import EnquiryButton from "./EnquiryButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const links = [
  { href: "/modules", label: "Moduly" },
  { href: "/support", label: "Podpora" },
  /*   { href: "/partner", label: "Partneři" }, */
  { href: "/contact", label: "Kontakt" },
  { href: "/ai", label: "Poradna" },
  //{ href: "/partner", label: "Stát se partnerem" },
];

function Header({}: Props) {
  const path = usePathname();

  return (
    <div className="flex flex-col lg:flex-row bg-white text-black  items-center justify-center mx-auto w-full p-10">
      <div className="flex justify-center lg:justify-start w-full">
        <Link href="/">
          <Image
            className="object-cover pb-10 lg:pb-0"
            src="/images/spisum_logo.svg"
            alt="Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>
      <div className="flex w-full  justify-center items-center  mx-auto ">
        <div className="flex items-center justify-center gap-4">
          {links.map(({ href, label }, i) => (
            <Link
              key={i}
              href={href}
              className={`relative px-2 uppercase ${
                href === path ? "font-bold" : ""
              }`}
            >
              {href === path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[1px] w-full bg-black "
                />
              )}
              <motion.div whileHover={{ scale: 1.1 }}> {label}</motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex  gap-4 w-full p-5 justify-center">
        <OrderButton title="Vyzkoušet Demo" />
        <EnquiryButton />
        <UserButton afterSignOutUrl="/" />
        {/*         <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          href="/"
          className="flex rounded-md bg-red-500 items-center justify-center px-5 text-yellow-200"
        >
          Home
        </motion.a> */}
      </div>
    </div>
  );
}

export default Header;
