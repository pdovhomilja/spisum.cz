import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import OrderButton from "./OrderButton";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-row bg-white text-black  items-center justify-center mx-auto w-full py-5">
      <div className="pl-5">
        <Link href="/">
          <Image
            className="object-cover"
            src="/images/spisum_logo.svg"
            alt="Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>
      <div className="flex w-full items-center justify-center mx-auto ">
        <div className="flex items-center justify-center  gap-20 uppercase ">
          <div className="flex items-center justify-center gap-4 ">
            <Link href="/modules">Moduly</Link>
            <Link href="/support">Podpora</Link>
            <Link href="/contact">Kontakt</Link>
            {/*        <Link href="/partner">Stát se partnerem</Link> */}
          </div>
          <div className="flex gap-4">
            <Button asChild className="bg-[#4154B3]">
              <Link href="/contact" className="space-x-2">
                <PaperAirplaneIcon className="h-5 w-5" />
                <p> Poslat poptávku</p>
              </Link>
            </Button>
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
