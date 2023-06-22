import { Collaboration } from "@/components/framer/collaboration";
import { Example } from "@/components/framer/Example";
import Hero from "@/components/Hero";
import PageWrapper from "@/lib/page-wrapper";
import React from "react";

type Props = {};

const FramerPage = (props: Props) => {
  return (
    <PageWrapper className="overflow-hidden h-full">
      <Example />
    </PageWrapper>
  );
};

export default FramerPage;
