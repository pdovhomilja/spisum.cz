import React from "react";

type Props = {};

const ConsentPage = (props: Props) => {
  return (
    <div className="w-2/3 mx-auto  h-full overflow-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
        Informace o zpracování osobních údajů zákazníků
      </h1>
      <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        A. Správce
      </h2>
      <p className="py-5">
        Správcem osobních údajů je{" "}
        <span className="font-bold">ISFG technology a.s., IČO: 10975047</span>,
        se sídlem Švábova 772/18, Hlubočepy, 152 00 Praha 5, zapsaný ve
        obchodním rejstříku vedeném Městským soudem v Praze pod sp. zn. B 26456
        (dále jen „ISFG“ nebo „my“).
      </p>
      <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        B. Účely a právní základy pro zpracování
      </h2>
      <p className="py-5">
        Vaše osobní údaje jako zákazníka zpracováváme pro následující účely:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          uzavření a plnění smlouvy se zákazníkem, abychom Vám mohli poskytovat
          objednané produkty služby, a to na na základě právního titulu uzavření
          smlouvy a kroků vedoucích k jejímu uzavření, jste-li její smluvní
          stranou, nebo na základě našeho oprávněného zájmu na plnění takové
          smlouvy, zastupujete-li zákazníka;
        </li>
        <li>
          vnitřních administrativních potřeb a tvorby statistik a evidencí, a to
          na základě našeho oprávněného zájmu spočívajícího zejména ve vedení
          vnitří agendy a zlepšování námi poskytovaných služeb;
        </li>
        <li>
          ochrany právních nároků, a to na základě našeho oprávněného zájmu
          spočívajícího v ochraně našich práv a případně práv třetích osob a
          předcházení vzniku škod;
        </li>
        <li>
          zasílání obchodních sdělení nabídkou našich produktů a služeb, a to na
          základě našeho oprávněného zájmu spočívajícího v propagaci činnosti
          ISFG;
        </li>
        <li>plnění zákonných povinností, zejména z oblasti účetní a daňové.</li>
      </ul>
      <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        C. Zpracovávané osobní údaje a doba uchování
      </h2>
      <p className="py-5">Pro výše uvedené účely zpracováváme:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>identifikační údaje (např. jméno, příjmení, bydliště, IČO);</li>
        <li>
          kontaktní údaje (např. korespondenční a e-mailová adresa, telefonní
          číslo);
        </li>
        <li>údaje o využívání služeb, včetně záznamů vzájemné komunikace.</li>
      </ul>
      <p className="py-5">Osobní údaje uchováváme:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          pro účel dle písm. a) výše po celou dobu trvání smluvního vztahu
          zákazníkem;
        </li>
        <li>
          pro účely dle písm. b) a c) výše po dobu nezbytnou k realizaci práv a
          povinností plynoucích z uzavřené smlouvy a po dobu trvání promlčecí
          doby (v délce maximálně 15 let od skončení smluvního vztahu) nároků
          vyplývajících nebo souvisejících s touto smlouvou prodlouženou o další
          1 rok s ohledem na ochranu našich právních nároků, přičemž v případě
          zahájení soudního, správního nebo jiného řízení zpracováváme osobní
          údaje členů v nezbytném rozsahu po celou dobu trvání takových řízení;
        </li>
        <li>
          pro účel dle písm. d) výše po dobu trvání smluvního vztahu se
          zákazníkem a dalších 12 měsíců po jeho skončení;
        </li>
        <li>
          pro účel dle písm. e) výše po celou dobu trvání zákonných povinností,
          zpravidla však nikoliv déle než po dobu 10 let.
        </li>
      </ul>
      <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        D. Kdo osobní údaje zpracovává a komu je předáváme?
      </h2>
      <p className="py-5">
        Všechny zmíněné osobní údaje zpracováváme my jako správce. To znamená,
        že my stanovujeme shora vymezené účely, pro které Vaše osobní údaje
        shromažďujeme, určujeme prostředky zpracování a odpovídáme za jeho řádné
        provedení.
      </p>
      <p className="py-5">
        Pro zpracování osobních údajů pro rovněž využíváme služeb dalších
        společností, které osobní údaje zpracovávají na náš pokyn
        (zpracovatelé). Jedná se především o:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Poskytovatele informačních systémů a technické infrastruktury.</li>
        <li>
          Společnost pro zpracování účetnictví:
          <br />
          Eriboll s.r.o., se sídlem Vstavačová 761, Stodůlky, 155 00 Praha 5,
          IČO: 04065506
        </li>
      </ul>
      <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        E. Jaká máte práva při zpracování osobních údajů?
      </h2>
      <p className="py-5">
        Stejně jako my máme svá práva a povinnosti při zpracování Vašich
        osobních údajů, máte také Vy při zpracování Vašich osobních údajů určitá
        práva. Mezi tato práva patří:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Právo na přístup:</strong> Máte právo vědět, jaké údaje o Vás
          zpracováváme, za jakým účelem, po jakou dobu, kde Vaše osobní údaje
          získáváme, komu je předáváme, kdo je mimo nás zpracovává a jaká máte
          další práva související se zpracováním Vašich osobních údajů. To vše
          jste se dozvěděl v těchto Informacích o zpracování osobních údajů.
          Pokud si však nejste jistý, které osobní údaje o Vás zpracováváme,
          můžete nás požádat o potvrzení, zda osobní údaje, které se Vás týkají,
          jsou či nejsou z naší strany zpracovávány, a pokud tomu tak je, máte
          právo získat přístup k těmto osobním údajům. V rámci práva na přístup
          nás můžete požádat o kopii zpracovávaných osobních údajů, přičemž
          první kopii Vám poskytneme bezplatně a další kopie s poplatkem.
        </li>
        <li>
          <strong>Právo na opravu:</strong> Pokud zjistíte, že osobní údaje,
          které o Vás zpracováváme, jsou nepřesné nebo neúplné, máte právo na
          to, abychom je bez zbytečného odkladu opravili, popřípadě doplnili.
        </li>
        <li>
          <strong>Právo na výmaz:</strong> V některých případech máte právo,
          abychom Vaše osobní údaje vymazali. Vaše osobní údaje bez zbytečného
          odkladu vymažeme, pokud je splněn některý z následujících důvodů:
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              a) Vaše osobní údaje již nepotřebujeme pro účely, pro které jsme
              je zpracovávali,
            </li>
            <li>
              b) využijete svého práva vznést námitku proti zpracování (viz níže
              kapitola „Právo vznést námitku proti zpracování“) u osobních
              údajů, které zpracováváme na základě našich oprávněných zájmů, a
              my shledáme, že již žádné takové oprávněné zájmy, které by toto
              zpracování opravňovaly, nemáme, nebo
            </li>
            <li>
              c) ukáže se, že námi prováděné zpracování osobních údajů přestalo
              být v souladu s obecně závaznými předpisy.
            </li>
          </ul>
          Mějte prosím na paměti, že i když půjde o jeden z těchto důvodů,
          neznamená to, že ihned smažeme všechny Vaše osobní údaje. Toto právo
          se totiž neuplatní v případě, že zpracování Vašich osobních údajů je i
          nadále nezbytné pro:
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>a) splnění naší právní povinnosti,</li>
            <li>
              b) účely archivace, vědeckého či historického výzkumu či pro
              statistické účely, nebo
            </li>
            <li>c) určení, výkon nebo obhajobu našich právních nároků.</li>
          </ul>
        </li>
        <li>
          <strong>Právo na omezení zpracování:</strong> V některých případech
          můžete kromě práva na výmaz využít právo na omezení zpracování
          osobních údajů. Toto právo Vám umožňuje v určitých případech
          požadovat, aby došlo k označení Vašich osobních údajů a tyto údaje
          nebyly předmětem žádných dalších operací zpracování – v tomto případě
          však nikoliv navždy (jako v případě práva na výmaz), ale po omezenou
          dobu. Zpracování osobních údajů musíme omezit když:
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              a) popíráte přesnost osobních údajů, než se dohodneme, jaké údaje
              jsou správné,
            </li>
            <li>
              b) Vaše osobní údaje zpracováváme bez dostatečného právního
              základu (např. nad rámec toho, co zpracovávat musíme), ale Vy
              budete před výmazem takových údajů upřednostňovat pouze jejich
              omezení (např. pokud očekáváte, že byste nám v budoucnu takové
              údaje stejně poskytl),
            </li>
            <li>
              c) Vaše osobní údaje již nepotřebujeme pro shora uvedené účely
              zpracování, ale Vy je požadujete pro určení, výkon nebo obhajobu
              svých právních nároků, nebo
            </li>
            <li>
              d) vznesete námitku proti zpracování. Právo na námitku je
              podrobněji popsáno níže v kapitole „Právo vznést námitku proti
              zpracování“. Po dobu, po kterou šetříme, je-li Vaše námitka
              oprávněná, jsme povinni zpracování Vašich osobních údajů omezit.
            </li>
          </ul>
        </li>
        <li>
          <strong>Právo na přenositelnost:</strong> Máte právo získat od nás
          všechny Vaše osobní údaje, které jste nám Vy sám poskytl a které
          zpracováváme na základě plnění smlouvy. Vaše osobní údaje vám
          poskytneme ve strukturovaném, běžně používaném a strojově čitelném
          formátu.
        </li>
        <li>
          <strong>Právo vznést námitku proti zpracování:</strong> Máte právo
          vznést námitku proti zpracování osobních údajů, k němuž dochází na
          základě našeho oprávněného zájmu. Vzhledem k tomu, že nejde o
          marketingové aktivity, přestaneme Vaše osobní údaje zpracovávat, pokud
          nebudeme mít závažné oprávněné důvody pro to, abychom v takovém
          zpracování pokračovali.
        </li>
        <li>
          <strong>Právo podat stížnost:</strong> Uplatněním práv výše uvedeným
          způsobem není nijak dotčeno Vaše právo podat stížnost u Úřadu pro
          ochranu osobních údajů, a to způsobem uvedeným níže v kapitole „Jak
          lze uplatnit jednotlivá práva?“.
        </li>
        <h2 className="text-orange-400 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors mt-5">
          F. Jak lze uplatnit jednotlivá práva?
        </h2>
        <p className="py-5">
          Ve všech záležitostech souvisejících se zpracováním Vašich osobních
          údajů, ať již jde o dotaz, uplatnění práva, podání stížnosti či
          cokoliv jiného, se na nás můžete obracet kterýmkoliv z následujících
          prostředků:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Emailem na: info@isfg.cz</li>
          <li>Písemně na adrese: Švábova 772/18, Hlubočepy, 152 00 Praha 5</li>
        </ul>
        <p className="py-5">
          Vaši žádost vyřídíme bez zbytečného odkladu, maximálně však do jednoho
          měsíce. Ve výjimečných případech, zejména z důvodu složitosti Vašeho
          požadavku, jsme oprávněni tuto lhůtu prodloužit o další dva měsíce. O
          takovém případném prodloužení a jeho zdůvodnění Vás samozřejmě budeme
          informovat.
        </p>
      </ul>
    </div>
  );
};

export default ConsentPage;
