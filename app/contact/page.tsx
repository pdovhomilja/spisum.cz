import GetInTouch from "@/components/getInTouch";
import { PageWrapper } from "@/lib/page-wrapper";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <PageWrapper className="overflow-auto h-full">
      <section className="bg-orange-400 w-full text-white h-full overflow-auto ">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
            Jsme Vaším partnerem
          </h1>
        </div>
        <div className="w-full overflow-auto">
          <GetInTouch />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
