import { Button } from "@/components/ui/button";

import React from "react";
import Confetti from "@/components/confetti";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="-mt-[100px] flex h-screen items-center justify-center  ">
      <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">
          {"Děkujeme za Váš zájem o produkt SpisUm!"}
        </h1>
        <p className="text-lg">
          {
            "Budeme Vás kontaktovat v kráké době. Jesli máte nějaké dotazy můžete nás kontaktovat na:"
          }
        </p>
        <p>
          <Button variant="link" className="underline" asChild>
            <Link href="mailto:info@spisum.cz" className="underline">
              info@spisum.cz
            </Link>
          </Button>
        </p>
      </div>
      <Confetti />
    </div>
  );
};

export default ThankYouPage;
