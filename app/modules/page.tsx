import Image from "next/image";
import React from "react";

type Props = {};

const Modules = (props: Props) => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center w-full">
        <div>
          <div className="flex items-center justify-center py-5">
            <h2 className="text-2xl ">Komplexní řešení spisové služby</h2>
          </div>
          <div className="flex flex-col md:flex-row text-white space-x-5">
            <div className="bg-blue-500 p-10">Podatelna</div>
            <div className="bg-blue-500 p-10">Evidence</div>
            <div className="bg-blue-500 p-10">Výpravna</div>
            <div className="bg-blue-500 p-10">Spisovna</div>
          </div>
        </div>
        <div className="flex flex-col mx:flex-row   items-center justify-center py-5">
          <h2 className="text-2xl">Klíčové funkce</h2>
          <div className="flex flex-col md:flex-row pt-5">
            <div className="w-full md:w-1/2">
              <div>
                <h3 className="text-xl font-bold">
                  Funkce modulů Podatelna a Výpravna
                </h3>
                <ul>
                  <li>
                    Příjem dokumentů (e-mailem, datovou schránkou, poštou)
                  </li>
                  <li>Validace a třídění příchozích dokumentů</li>
                  <li>Zaevidování dokumentu</li>
                  <li>Postoupení dokumentu k vyřízení</li>
                  <li>
                    Odeslání dokumentu (e-mailem, datovou schránkou, poštou,
                    převzetím, zveřejněním) a správa zásilek
                  </li>
                  <li>Stahování doručenek k odeslaným datovým zprávám</li>
                  <li>
                    Kontrola škodlivého kódu u přijatých dokumentů i dokumentů k
                    odeslání
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Funkce modulu Spisovna</h3>
                <ul>
                  <li>Uchování vyřízených dokumentů po dobu skartační lhůty</li>
                  <li>Zapůjčení digitálních dokumentů ze Spisovny</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Funkce modulu Jmenný rejstřík
                </h3>
                <ul>
                  <li>Založení a editace nového subjektu</li>
                  <li>Vytváření vazeb mezi subjekty a dokumenty</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <div>
                  <h3 className="text-xl font-bold">
                    Funkce modulů Evidence a Podpisová kniha
                  </h3>
                  <ul>
                    <li>
                      Provedení konverze dokumentů a převod doumentů do
                      výstupního formátu podle platné legislativy
                    </li>
                    <li>Vytváření poznámek v dokumentu nebo spisu</li>
                    <li>
                      Předání dokumentu jinému uživateli (např. k podepsání nebo
                      opečetění) nebo spisovému uzlu{" "}
                    </li>
                    <li>
                      Opatření dokumentu kvalifikovaným elektronickým
                      podpisem/kvalifikovanou elektronickou pečetí
                    </li>
                    <li>Vytváření konceptu a povýšení konceptu na dokument</li>
                    <li>
                      Kontrola úplnosti dokumentu, vyřízení dokumentu a jeho
                      zařazení do spisu
                    </li>
                    <li>
                      Kontrola úplnosti spisu, uzavření spisu a jeho přenos do
                      Spisovny
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Funkce modulu Skartace</h3>
                  <ul>
                    <li>Podpora procesu skartačního řízení</li>
                    <li>
                      Předávání dokumentů v datovém balíčku SIP do Národního
                      digitálního archivu
                    </li>
                    <li>
                      Sestavení a odeslání skartačního návrhu včetně průvodního
                      dopisu
                    </li>
                    <li>
                      Import rozhodnutí a přejímky z Národního digitálního
                      archivu
                    </li>
                    <li>Smazání komponent zničených dokumentů</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Funkce modulu Administrace
                  </h3>
                  <ul>
                    <li>
                      Zobrazení, procházení a export transakčního protokolu
                    </li>
                    <li>Evidence konverzí</li>
                    <li>Uložení denního otisku</li>
                    <li>Správa uživatelů a rolí</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full  ">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl text-orange-400">Produkt nové generace</h2>
            <p>
              Elektronická spisová služba SpisUm je intuitivním nástrojem, který
              v maximální míře zaručuje transparentní a přehlednou správu
              dokumentů, a to v souladu s právními předpisy.
            </p>
            <button className="btn-orange">Poptej SpisUm</button>
          </div>
          <div>
            <Image
              src="/images/02-spisum.jpg"
              width={1000}
              height={500}
              alt="image2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
