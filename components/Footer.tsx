import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-row h-14 p-5 items-center justify-between w-full text-xs">
      <div className="flex items-center rounded-full border p-1 px-2">
        <Link href="/admin">A</Link>
      </div>
      <div className="flex flex-col md:flex-row justify-end gap-2">
        <div className="gap-2">
          powered by Next.js{" "}
          <span className="bg-black rounded-md text-white px-1">15</span> hosted
          by:
          <span className="text-bold underline">
            <Link href="https://www.vercel.com">Vercel</Link>
          </span>
        </div>
        <div className="gap-2 "></div>
      </div>
    </div>
  );
}

export default Footer;
