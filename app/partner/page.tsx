import React from "react";

type Props = {};

const Partner = (props: Props) => {
  return (
    <div className="w-2/3 mx-auto">
      <section>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
          Naši partneři
        </h1>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              <div className="bg-gray-400/5 p-8 sm:p-10">Documex Logo</div>
              <div className="bg-gray-400/5 p-6 sm:p-10"></div>
              <div className="bg-gray-400/5 p-6 sm:p-10"></div>
              <div className="bg-gray-400/5 p-6 sm:p-10"></div>
              <div className="bg-gray-400/5 p-6 sm:p-10"></div>
              <div className="bg-gray-400/5 p-6 sm:p-10"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Staň se partnerem
        </h2>
        <p>Text proč být partnerem</p>
        <div>Partner form</div>
      </section>
    </div>
  );
};

export default Partner;
