import Image from "next/image";
import Link from "next/link";
import {
  BanknotesIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="w-full mx-auto overflow-auto h-full">
      <div className="flex flex-col items-start justify-center md:flex-row py-20 px-40">
        <div className=" w-full  md:w-1/2 space-y-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Elektronická spisová služba SpisUm
          </h1>
          <p>
            Komplexní vedení úředních dokumentů jednoduše, přehledně a
            efektivně. Šetřete svůj čas, ale především čas referentů, kteří s
            dokumenty pracují.
          </p>
          <Button asChild className="bg-[#FE9601] hover:bg-[#4154B3]">
            <Link href="/modules" className="space-x-2 uppercase">
              Zjistit více
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center max-w-lg">
          <Image
            className="object-cover"
            src="/images/img-web.png"
            alt="Image"
            width={400}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row bg-gray-200">
        <div className="w-full md:w-1/2 space-y-5 p-20 text-sm">
          <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            1. Moderní řešení spisové služby
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6  text-justify">
            SpisUm je moderní řešení s jednoduchým a intuitivním uživatelským
            rozhraním reflektující nároky a požadavky každého uživatele spisové
            služy. Se SpisUm můžete evidovat jakýkoliv digitální obsah
            jednoduše, přehledně a efektivně.
          </p>
          <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            2. Buďte v souladu s legislativou České republiky
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6  text-justify">
            SpisUm splňuje náležitosti legislativy České republiky na výkon
            spisové služby. Obsahuje kontrolní mechanismy, jasný proces
            finalizace dokumentu a jeho odeslání. Zároveň vychází z potřeb
            jednotlivých referentů a reflektuje odborné prověřené postupy.
            Splňuje požadavky NSESS, které umožňují provádění skartačního
            řízení.
          </p>
          <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            3. Obíhat nechte dokumenty, nikoliv zaměstnance
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6  text-justify">
            Nepodceňujte systém spisové služby, SpisUm spravuje ve Vaší
            organizaci celý životní cyklus dokumentů, a to díky správě jejich
            metadat. Zabraňte opakujícím se chybám při odesílání dokumentů,
            které se již nebudou ztrácet. Buďte připraveni na provádění
            skartačního řízení. Předcházejte chybám a nedostatkům díky
            jednoduchým procesům a notifikacím.
          </p>
          <h2 className="text-orange-400 scroll-m-20 border-b border-orange-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            4. Partnerský přístup
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
            Jsme Vaším partnerem. Věnujeme náležitou pozornost všem zákazníkům i
            procesům samotné spisové služby. Odpovědně se stavíme za
            profesionální stav spisové služby a její funkčnost. Společně
            nastavíme vhodné procesy, zajistíme řízení spisové služby po stránce
            metodické a vyškolíme dostatečné množství odborníků v rámci daných
            organizačních útvarů. Naše produkty přizpůsobujeme Vaší práci, jejíž
            nedílnou součástí je pracovat v systému spisové služby.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center md:justify-end px-2 md:pr-20">
          <Image
            src="/images/Spisum.gif"
            alt="Image"
            width={800}
            height={600}
            className="object-cover rounded-sm "
          />
        </div>
      </div>
      <div className="flex flex-col w-full mx-auto items-center justify-center p-20">
        <h2 className="text-2xl py-5">Komplexní řešení spisové služby</h2>
        <div className="flex flex-col md:flex-row px-5 space-x-5">
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
      <div className="flex flex-col lg:flex-row w-full bg-orange-400 p-20">
        <div className="flex flex-col items-center justify-center p-5 text-white">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Produkt nové generace
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
            Elektronická spisová služba SpisUm je intuitivním nástrojem, který v
            maximální míře zaručí transparentní a přehledné spravování dokumentů
            v souladu s právními předpisy.
          </p>
          <Button
            asChild
            className="bg-[#4154B3] hover:bg-[#FE9601] my-10 hover:outline"
          >
            <Link href="/modules" className="space-x-2 uppercase">
              Zjistit více
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 w-full  md:p-20">
          <div className="flex items-center space-x-5 bg-white p-5 w-full">
            <CloudIcon className="w-5 h-5" />
            <p>
              Uživatelsky jednoduchá online aplikace dostupná on-premise nebo na
              cloudu.
            </p>
          </div>
          <div className="flex items-center space-x-5 bg-white p-5 w-full">
            <CheckBadgeIcon className="w-5 h-5" />
            <p>
              Systém v souladu s legislativou České republiky a vyhlášky č.
              259/2012 Sb. a NSESS
            </p>
          </div>
          <div className="flex items-center space-x-5 bg-white p-5 w-full">
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
