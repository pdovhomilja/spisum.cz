import PageWrapper from "@/lib/page-wrapper";
import {
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const Box = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col w-full h-full items-center justify-center bg-white p-10 text-[#FE9601] rounded-md ">
    {icon}
    <h3>{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Support = (props: Props) => {
  return (
    <PageWrapper className="w-full h-full overflow-auto bg-indigo-700 text-white md:px-20">
      <div className="grid grid-cols-1 items-center justify-center h-full ">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-5">
            Máte naši podporu
          </h1>
          <p className="p-5">
            Prodejem produktu naše spolupráce nekončí, naopak začíná. Nejste si
            jisti, zda SpisUm řešení je pro vás vhodné? Neváhejte se na nás
            obrátit. Poradíme Vám a individuálně proškolíme Vaše zaměstnance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 w-full h-full pb-20 px-2">
          <Box
            icon={<UserGroupIcon className="h-8 w-8" aria-hidden="true" />}
            title="Helpdesk"
            description=" Podpora v českém jazyce od vyškolených odporníků na spisovou
            službu"
          />
          <Box
            icon={<AcademicCapIcon className="h-8 w-8" aria-hidden="true" />}
            title="Školení"
            description="  Školení od zkušených metodiků na míru Vašim potřebám"
          />
          <Box
            icon={<LightBulbIcon className="h-8 w-8" aria-hidden="true" />}
            title="Nadstavba"
            description="Vytvoříme pro Vás rozšíření, které bude přesně odpovídat Vašim
            požadavkům"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Support;
