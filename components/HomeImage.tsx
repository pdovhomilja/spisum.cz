"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const HomeImage = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center max-w-lg"
    >
      <Image
        className="object-cover"
        src="/images/img-web.png"
        alt="Image"
        width={400}
        height={100}
      />
    </motion.div>
  );
};

export default HomeImage;
