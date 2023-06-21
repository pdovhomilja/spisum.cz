"use client";
import { LoremIpsum } from "@/components/LoremIpsum";
import PageWrapper from "@/lib/page-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const FramerPage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  return (
    <PageWrapper className="h-full overflow-auto">
      {/*       <motion.div
        className="fixed top-0 left-0 right-0 h-10 bg-red-500 origin-left "
        style={{ scaleX: scrollYProgress }}
      /> */}
      <h1>
        <code>useScroll</code> demo
      </h1>
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
    </PageWrapper>
  );
};

export default FramerPage;
