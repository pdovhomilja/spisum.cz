"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      //className="flex items-center justify-center max-w-lg"
      className=" w-full  md:w-1/2 space-y-5"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Elektronická spisová služba SpisUm
      </h1>
      <p>
        Komplexní vedení úředních dokumentů jednoduše, přehledně a efektivně.
        Šetřete svůj čas, ale především čas referentů, kteří s dokumenty
        pracují.
      </p>
      <Button asChild className="bg-[#FE9601] hover:bg-[#4154B3]">
        <Link href="/modules" className="space-x-2 uppercase">
          Zjistit více
        </Link>
      </Button>
    </motion.div>
  );
};

export default HomeBanner;
