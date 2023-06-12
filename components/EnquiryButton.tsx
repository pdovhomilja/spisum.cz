"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "./ui/button";

type Props = {};

const EnquiryButton = (props: Props) => {
  const [url, setUrl] = React.useState("");
  const router = usePathname();

  return (
    <div className={router === "/contact" ? "hidden" : "visible"}>
      <Button asChild className="bg-[#4154B3]">
        <Link href="/contact" className="space-x-2">
          <PaperAirplaneIcon className="h-5 w-5" />
          <p> Poslat poptávku</p>
        </Link>
      </Button>
    </div>
  );
};

export default EnquiryButton;
