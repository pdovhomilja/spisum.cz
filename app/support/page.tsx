import {
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const Support = (props: Props) => {
  return (
    <section className="w-full mx-auto overflow-auto h-full">
      <div className="flex flex-col items-start justify-center w-full mx-auto bg-indigo-700 text-white h-full lg:p-80">
        <div className="flex flex-col items-center justify-center space-x-5 w-full py-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
            Máte naši podporu
          </h1>
          <p className="p-5">
            Prodejem produktu naše spolupráce nekončí, naopak začíná. Nejste si
            jisti, zda SpisUm řešení je pro vás vhodné? Neváhejte se na nás
            obrátit. Poradíme Vám a individuálně proškolíme Vaše zaměstnance.
          </p>
        </div>
        <div className="flex flex-row justify-center space-x-5 w-full py-5 px-5">
          <div className="flex flex-col items-center justify-center bg-white p-10 text-orange-600">
            <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
            <h3>Helpdesk</h3>
            <p className="text-gray-500">
              Podpora v českém jazyce od vyškolených odporníků na spisovou
              službu
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-10 text-orange-600">
            <AcademicCapIcon className="h-8 w-8" aria-hidden="true" />
            <h3>Školení</h3>
            <p className="text-gray-500">
              Školení od zkušených metodiků na míru Vašim potřebám
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-10 text-orange-600">
            <LightBulbIcon className="h-8 w-8" aria-hidden="true" />
            <h3>Nadstavba</h3>
            <p className="text-gray-500">
              Vytvoříme pro Vás rozšíření, které bude přesně odpovídat Vašim
              požadavkům
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
