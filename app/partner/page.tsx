import PartnerForm from "@/components/PartnerForm";
import PageWrapper from "@/lib/page-wrapper";
import Link from "next/link";
import React from "react";

type Props = {};

const Partner = (props: Props) => {
  return (
    <PageWrapper className="overflow-auto h-full">
      <div className="w-2/3 mx-auto overflow-auto h-full ">
        <section>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
            Věříme, že spolupráce je základem úspěchu.
          </h1>
          <p className="w-2/3 mx-auto py-10">
            Protože se chceme soustředit na vývoj a podporu našich produktů,
            <span className="text-semibold underline">hledáme partnery</span>,
            kteří budou našim zákazníkům poskytovat konzultace, implementace a
            další služby.
          </p>
          <p className="w-2/3 mx-auto">
            Pokud máte zájem o spolupráci, spojte se s námi pomocí formuláře{" "}
            <Link href={"/contact"} className="text-blue-500">
              zde
            </Link>
          </p>
          <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl underline py-20">
            Naši partneři
          </h2>

          <div className="bg-white py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                <div className="bg-gray-400/5 p-8 sm:p-10  border rounded-md">
                  <a
                    href="https://www.documex.cz"
                    className="-m-1.5 p-1.5"
                    target={"_blank"}
                  >
                    <span className="sr-only">Documex s.r.o.</span>
                    <img
                      className=" w-48"
                      src="/images/partners/logo.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-gray-400/5 p-6 sm:p-10"></div>
                <div className="bg-gray-400/5 p-6 sm:p-10"></div>
                <div className="bg-gray-400/5 p-6 sm:p-10"></div>
                <div className="bg-gray-400/5 p-6 sm:p-10"></div>
                <div className="bg-gray-400/5 p-6 sm:p-10"></div>
              </div>
            </div>
          </div>
        </section>
        {/*       <section className="overflow-auto">
        <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Staň se partnerem
        </h2>
        <p>Text proč být partnerem</p>
        <PartnerForm />
      </section> */}
      </div>
    </PageWrapper>
  );
};

export default Partner;
