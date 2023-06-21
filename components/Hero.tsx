"use client";

import React, { useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ scale, position }}
        className="flex fixed z-10  items-center p-5 md:p-20 lg:p-80"
      >
        <div className="w-full  md:w-1/2 space-y-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Elektronická spisová služba SpisUm
          </h1>
          <p>
            Komplexní vedení úředních dokumentů jednoduše, přehledně a
            efektivně. Šetřete svůj čas, ale především čas referentů, kteří s
            dokumenty pracují.
          </p>
          <Button asChild className="bg-[#FE9601] hover:bg-[#4154B3]">
            <Link href="/modules" className="space-x-2 uppercase">
              Zjistit více
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center w-full max-w-lg">
          <Image
            className="object-cover"
            src="/images/img-web.png"
            alt="Image"
            width={400}
            height={100}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
