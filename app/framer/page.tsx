import { Collaboration } from "@/components/framer/collaboration";
import Hero from "@/components/Hero";
import PageWrapper from "@/lib/page-wrapper";
import React from "react";

type Props = {};

const FramerPage = (props: Props) => {
  return (
    <PageWrapper className="overflow-hidden">
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
      </div>
    </PageWrapper>
  );
};

export default FramerPage;
