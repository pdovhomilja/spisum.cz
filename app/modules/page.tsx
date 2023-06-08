import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OrderButton from "@/components/OrderButton";

type Props = {};

const Modules = (props: Props) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full p-20 lg:px-80">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
            Komplexní řešení spisové služby
          </h1>

          <div className="flex flex-col md:flex-row text-white space-x-5">
            <Card className="bg-blue-500 text-white">
              <CardHeader>
                <CardTitle>Podatelna</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Zde se uskutečňuje prvotní příjem dokumentu. Je zde možné
                  dokument editovat a přidělit jej odpovědnému pracovníkovi.
                  Automaticky se načtou metadata – údaje o dokumentu (např.
                  odesílatel, datový formát, datum a čas doručení). Přílohy se
                  převedou do výstupních datových formátů.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500 text-white">
              <CardHeader>
                <CardTitle>Evidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Slouží především k převzetí dokumentu z Podatelny a přidělení
                  jednacího čísla. Je zde možné vytvoření vlastního dokumentu
                  (konceptu) a jeho povýšení na dokument. Následně je možné
                  založit dokument do spisu a vyplnit metadata. Každá úprava
                  metadat se ukládá do transakčního protokolu.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500 text-white">
              <CardHeader>
                <CardTitle>Výpravna</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Slouží k odeslání dokumentů adresátům a celkové evidenci
                  odeslaných dokumentů. K odeslání dokumentů lze využít služeb
                  datové schránky, e-mailu nebo České pošty.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500 text-white">
              <CardHeader>
                <CardTitle>Spisovna</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Je určena pro dlouhodobé ukládání dokumentů a spisů, a to ve
                  správném formátu. To vše po dobu skartační lhůty, ze které se
                  realizuje skartační řízení.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full p-20 lg:px-80">
        <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Klíčové funkce
        </h2>
        <div className="flex flex-col md:flex-row pt-5">
          <div className="w-full md:w-1/2">
            <div className="py-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-5">
                Funkce modulů Podatelna a Výpravna
              </h3>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Příjem dokumentů (e-mailem, datovou schránkou, poštou)
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Validace a třídění příchozích dokumentů</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Zaevidování dokumentu</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Postoupení dokumentu k vyřízení</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Odeslání dokumentu (e-mailem, datovou schránkou, poštou,
                  převzetím, zveřejněním) a správa zásilek
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Stahování doručenek k odeslaným datovým zprávám
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Kontrola škodlivého kódu u přijatých dokumentů i dokumentů k
                  odeslání
                </p>
              </div>
            </div>
            <div className="py-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-5">
                Funkce modulu Spisovna
              </h3>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Uchování vyřízených dokumentů po dobu skartační lhůty
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Zapůjčení digitálních dokumentů ze Spisovny
                </p>
              </div>
            </div>
            <div className="py-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-5">
                Funkce modulu Jmenný rejstřík
              </h3>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Založení a editace nového subjektu</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Vytváření vazeb mezi subjekty a dokumenty
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="py-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-5">
                Funkce modulů Evidence a Podpisová kniha
              </h3>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Provedení konverze dokumentů a převod doumentů do výstupního
                  formátu podle platné legislativy
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Vytváření poznámek v dokumentu nebo spisu
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Předání dokumentu jinému uživateli (např. k podepsání nebo
                  opečetění) nebo spisovému uzlu{" "}
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Opatření dokumentu kvalifikovaným elektronickým
                  podpisem/kvalifikovanou elektronickou pečetí
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Vytváření konceptu a povýšení konceptu na dokument
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Kontrola úplnosti dokumentu, vyřízení dokumentu a jeho
                  zařazení do spisu
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Kontrola úplnosti spisu, uzavření spisu a jeho přenos do
                  Spisovny
                </p>
              </div>
            </div>
            <div className="py-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Funkce modulu Skartace
              </h3>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Podpora procesu skartačního řízení</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Předávání dokumentů v datovém balíčku SIP do Národního
                  digitálního archivu
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Sestavení a odeslání skartačního návrhu včetně průvodního
                  dopisu
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Import rozhodnutí a přejímky z Národního digitálního archivu
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Smazání komponent zničených dokumentů</p>
              </div>
            </div>
            <div className="py-5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Funkce modulu Administrace
              </h3>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">
                  Zobrazení, procházení a export transakčního protokolu
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Evidence konverzí</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Uložení denního otisku</p>
              </div>
              <div className="flex items-center justify-start gap-2 py-1">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500 " />
                <p className="pl-5">Správa uživatelů a rolí</p>
              </div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full p-20 lg:px-80">
        <div className="flex flex-col md:flex-row w-full ">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-5">
            <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Produkt nové generace
            </h2>
            <p>
              Elektronická spisová služba SpisUm je intuitivním nástrojem, který
              v maximální míře zaručuje transparentní a přehlednou správu
              dokumentů, a to v souladu s právními předpisy.
            </p>
            <OrderButton title="Vyzkoušet demo" />
          </div>
          <div className="p-20 lg:p-40">
            <Image
              src="/images/02-spisum.jpg"
              width={1000}
              height={500}
              alt="image2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Modules;
