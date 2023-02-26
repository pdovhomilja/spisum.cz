import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  BanknotesIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center  ">
      <div className="flex flex-col items-start justify-center md:flex-row p-5">
        <div className=" w-full  md:w-1/2 space-y-5">
          <h1 className="text-3xl font-bold">
            Elektronická spisová služba SpisUm
          </h1>
          <p>
            Komplexní vedení úředních dokumentů jednoduše, přehledně a
            efektivně. Šetřete svůj čas, ale především čas referentů, kteří s
            dokumenty pracují.
          </p>
          <p>
            <Link href="/modules" className="btn-orange gap-2">
              Zjistit více
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Image
            className="object-cover"
            src="/images/img-web.png"
            alt="Image"
            width={400}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row bg-gray-200 py-5 ">
        <div className="w-full md:w-1/2 flex items-start justify-center">
          <Image
            src="/images/01-spisum.png"
            alt="Image"
            width={400}
            height={100}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-2xl text-orange-400">
            1. Moderní řešení spisové služby
          </h2>
          <p>
            SpisUm je moderní řešení s jednoduchým a intuitivním uživatelským
            rozhraním reflektující nároky a požadavky každého uživatele spisové
            služy. Se SpisUm můžete evidovat jakýkoliv digitální obsah
            jednoduše, přehledně a efektivně.
          </p>
          <h2 className="text-2xl text-orange-400">
            2. Buďte v souladu s legislativou České republiky
          </h2>
          <p>
            SpisUm splňuje náležitosti legislativy České republiky na výkon
            spisové služby. Obsahuje kontrolní mechanismy, jasný proces
            finalizace dokumentu a jeho odeslání. Zároveň vychází z potřeb
            jednotlivých referentů a reflektuje odborné prověřené postupy.
            Splňuje požadavky NSESS, které umožňují provádění skartačního
            řízení.
          </p>
          <h2 className="text-2xl text-orange-400">
            3. Obíhat nechte dokumenty, nikoliv zaměstnance
          </h2>
          <p>
            Nepodceňujte systém spisové služby, SpisUm spravuje ve Vaší
            organizaci celý životní cyklus dokumentů, a to díky správě jejich
            metadat. Zabraňte opakujícím se chybám při odesílání dokumentů,
            které se již nebudou ztrácet. Buďte připraveni na provádění
            skartačního řízení. Předcházejte chybám a nedostatkům díky
            jednoduchým procesům a notifikacím.
          </p>
          <h2 className="text-2xl text-orange-400"> 4. Partnerský přístup </h2>
          <p>
            Jsme Vaším partnerem. Věnujeme náležitou pozornost všem zákazníkům i
            procesům samotné spisové služby. Odpovědně se stavíme za
            profesionální stav spisové služby a její funkčnost. Společně
            nastavíme vhodné procesy, zajistíme řízení spisové služby po stránce
            metodické a vyškolíme dostatečné množství odborníků v rámci daných
            organizačních útvarů. Naše produkty přizpůsobujeme Vaší práci, jejíž
            nedílnou součástí je pracovat v systému spisové služby.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full mx-auto items-center justify-center py-5">
        <h2 className="text-2xl py-5">Komplexní řešení spisové služby</h2>
        <div className="flex flex-row px-5 space-x-5">
          <div className="w-full md:w-1/2 ">
            <ul>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Příjem dokumentu v elektronické podobě potvrzený informativní
                zprávou v souladu s právními předpisy
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Šifrovaná komunikace s využitím SSL certifikátu
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Předávání dokumentů v datovém balíčku SIP do národního
                digitálního archivu
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Možnost přidání nových funkcionalit aktualizace systému spisové
                služby podle měnících se požadavků příslušných právních úprav
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ul>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Možnost konverze včetně konverzních doložek
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Integrace s ISDS
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                Transakční protokol včetně kompletní historie kdo a kdy s daným
                dokumentem pracoval
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full bg-orange-400">
        <div className="flex flex-col items-center justify-center p-5 text-white">
          <h1 className="text-2xl">Produkt nové generace</h1>
          <p>
            Elektronická spisová služba SpisUm je intuitivním nástrojem, který v
            maximální míře zaručí transparentní a přehledné spravování dokumentů
            v souladu s právními předpisy.
          </p>
          <button className="btn-blue">Poptejte SpisUm</button>
        </div>
        <div className="space-y-5 py-5 w-full md:w-1/2 px-5 m-5">
          <div className="flex items-center space-x-5 bg-white p-5">
            <CloudIcon className="w-5 h-5" />
            <p>
              Uživatelsky jednoduchá online aplikace dostupná on-premise nebo na
              cloudu.
            </p>
          </div>
          <div className="flex items-center space-x-5 bg-white p-5">
            <CheckBadgeIcon className="w-5 h-5" />
            <p>
              Systém v souladu s legislativou České republiky a vyhlášky č.
              259/2012 Sb. a NSESS
            </p>
          </div>
          <div className="flex items-center space-x-5 bg-white p-5">
            <BanknotesIcon className="w-5 h-5" />
            <p>
              Cenově dostupné a škálovatelné řešení postavené na open-source
              platformě
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
