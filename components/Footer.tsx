import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-row h-28 py-10 px-5 items-end justify-end w-full ">
      <div className="pr-5">
        <Link href="/">
          <h1 className="text-gray-600">
            eOSVC - {process.env.NEXT_PUBLIC_APP_V}
          </h1>
        </Link>
      </div>
      <div className="space-x-2 pr-2">
        powered by Next.js{" "}
        <span className="bg-black rounded-md text-white px-1">13</span> hosted
        by:
        <span className="text-bold underline">
          <Link href="https://www.vercel.com">Vercel</Link>
        </span>
      </div>
      <div className="space-x-2">
        Supported by:
        <Link className="pl-1 font-bold" href="https://www.softbase.cz">
          SoftBase s.r.o.
        </Link>
      </div>
    </div>
  );
}

export default Footer;
