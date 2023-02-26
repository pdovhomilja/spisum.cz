import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

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
            <Link href="/contact" className="btn-orange gap-2">
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
      <div className="flex flex-col w-full mx-auto items-center justify-center">
        <h2 className="text-2xl pb-2">Komplexní řešení spisové služby</h2>
        <div className="flex flex-row px-5 space-x-5">
          <div className="w-full md:w-1/2">
            <p>
              <li>
                Příjem dokumentu v elektronické podobě potvrzený informativní
                zprávou v souladu s právními předpisy
              </li>
              <li>Šifrovaná komunikace s využitím SSL certifikátu</li>
              <li>
                Předávání dokumentů v datovém balíčku SIP do národního
                digitálního archivu
              </li>
              <li>
                Možnost přidání nových funkcionalit aktualizace systému spisové
                služby podle měnících se požadavků příslušných právních úprav
              </li>
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p>
              <li>Možnost konverze včetně konverzních doložek</li>
              <li>Integrace s ISDS</li>
              <li>
                Transakční protokol včetně kompletní historie kdo a kdy s daným
                dokumentem pracoval
              </li>
            </p>
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
          <div className="bg-white p-5">
            <p>
              Uživatelsky jednoduchá online aplikace dostupná on-premise nebo na
              cloudu.
            </p>
          </div>
          <div className="bg-white p-5">
            <p>
              Systém v souladu s legislativou České republiky a vyhlášky č.
              259/2012 Sb. a NSESS
            </p>
          </div>
          <div className="bg-white p-5">
            <p>
              Cenově dostupné a škálovatelné řešení postavené na open-source
              platformě
            </p>
          </div>
        </div>
      </div>
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
                <li>
                  <ul>
                    Příjem dokumentů (e-mailem, datovou schránkou, poštou)
                  </ul>
                  <ul>Validace a třídění příchozích dokumentů</ul>
                  <ul>Zaevidování dokumentu</ul>
                  <ul>Postoupení dokumentu k vyřízení</ul>
                  <ul>
                    Odeslání dokumentu (e-mailem, datovou schránkou, poštou,
                    převzetím, zveřejněním) a správa zásilek
                  </ul>
                  <ul>Stahování doručenek k odeslaným datovým zprávám</ul>
                  <ul>
                    Kontrola škodlivého kódu u přijatých dokumentů i dokumentů k
                    odeslání
                  </ul>
                </li>
              </div>
              <div>
                <h3 className="text-xl font-bold">Funkce modulu Spisovna</h3>
                <li>
                  <ul>Uchování vyřízených dokumentů po dobu skartační lhůty</ul>
                  <ul>Zapůjčení digitálních dokumentů ze Spisovny</ul>
                </li>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Funkce modulu Jmenný rejstřík
                </h3>
                <li>
                  <ul>Založení a editace nového subjektu</ul>
                  <ul>Vytváření vazeb mezi subjekty a dokumenty</ul>
                </li>
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
      <section className="w-full">
        <div className="flex flex-col items-start justify-center w-full mx-auto bg-indigo-700 text-white">
          <div className="flex flex-col items-center justify-center space-x-5 w-full">
            <h2 className="text-2xl">Máte naši podporu</h2>
            <p>
              Prodejem produktu naše spolupráce nekončí, naopak začíná. Nejste
              si jisti, zda SpisUm řešení je pro vás vhodné? Neváhejte se na nás
              obrátit. Poradíme Vám a individuálně proškolíme Vaše zaměstnance.
            </p>
          </div>
          <div className="flex flex-row justify-center space-x-5 w-full py-5">
            <div className="bg-white p-10 text-orange-600">
              <h3>Helpdesk</h3>
            </div>
            <div className="bg-white p-10 text-orange-600">
              <h3>Školení</h3>
            </div>

            <div className="bg-white p-10 text-orange-600">
              <h3>Nadstavba</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-orange-400 w-full text-white">
        <div>
          <h2>Jsme Vaším partnerem</h2>
          <p>
            Pokud Vás naše řešení zaujalo, neváhejte nás kontaktovat, rádi Vám
            SpisUm předvedeme. ISFG Technology a.s. Švábova 772/18, Praha 5
            e-mail: info@isfgroup.cz IČ: 10975047
          </p>
        </div>
      </section>
      <section>Google Maps</section>
    </main>
  );
}
