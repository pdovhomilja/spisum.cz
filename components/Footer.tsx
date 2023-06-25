import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-row h-14 p-5 items-center justify-end w-full text-xs">
      <div className="flex items-center rounded-full border p-1 px-2">
        <Link href="/admin">A</Link>
      </div>
      <div className="w-full" />
      <div className="flex w-1/2 justify-end">
        <div className="space-x-2 pr-2 w-80 justify-end">
          powered by Next.js{" "}
          <span className="bg-black rounded-md text-white px-1">13</span> hosted
          by:
          <span className="text-bold underline">
            <Link href="https://www.vercel.com">Vercel</Link>
          </span>
        </div>
        <div className="flex space-x-2 w-80 justify-end">
          Supported by:
          <Link className="pl-1 font-bold" href="https://www.isfg.cz">
            ISFG Technology a.s.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
