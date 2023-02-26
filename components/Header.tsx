import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  ComputerDesktopIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-row bg-white text-black  items-center justify-center mx-auto w-full py-5">
      <div className="pl-5">
        <Image
          className="object-cover"
          src="/images/spisum_logo.svg"
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="flex w-full items-center justify-center mx-auto ">
        <div className="flex items-center justify-center space-x-2 gap-2 uppercase ">
          <Link href="/" className="">
            Spisum
          </Link>
          <Link href="/modules">Moduly</Link>
          <Link href="/support">Podpora</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/partner">Stát se partnerem</Link>
          <Link href="/lead" className="btn-orange gap-2">
            <PaperAirplaneIcon className="h-5 w-5" />
            Poslat poptávku
          </Link>
          <Link href="/contact" className="btn-blue gap-2">
            <ComputerDesktopIcon className="h-5 w-5" />
            Demo
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-2 px-2">
        <SocialIcon url="https://github.com/ISFG" />
      </div>
    </div>
  );
}

export default Header;
