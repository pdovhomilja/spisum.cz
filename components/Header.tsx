import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import OrderButton from "./OrderButton";
import EnquiryButton from "./EnquiryButton";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-black  items-center justify-center mx-auto w-full py-5">
      <div className="pl-5">
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
      <div className="flex flex-col md:flex-row w-full items-center justify-center mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center  gap-20 uppercase ">
          <div className="flex items-center justify-center gap-4 ">
            <Link
              href="/modules"
              className="outline md:outline-0 rounded-md px-2 outline-1"
            >
              Moduly
            </Link>
            <Link
              href="/support"
              className="outline md:outline-0 rounded-md px-2 outline-1"
            >
              Podpora
            </Link>
            <Link
              href="/contact"
              className="outline md:outline-0 rounded-md px-2 outline-1"
            >
              Kontakt
            </Link>
            {/*        <Link href="/partner">Stát se partnerem</Link> */}
          </div>
          <div className="flex gap-4">
            <EnquiryButton />
            <OrderButton title="Vyzkoušet Demo" />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 px-2">
        {/*   <SocialIcon url="https://github.com/ISFG" /> */}
      </div>
    </div>
  );
}

export default Header;
