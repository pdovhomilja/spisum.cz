// components/cookiebanner.tsx

"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent != null ? "hidden" : "flex "}
                        flex-col sm:flex-row px-3 md:px-4 py-3 justify-between items-center  gap-4  
                         bg-gray-700 rounded-lg shadow  `}
    >
      <div className="text-left font-bold text-white text-xs">
        <Link href="/consent">
          <h1>Tato webová stránka používá cookies</h1>
          <br />
          <p className=" text-left">
            K personalizaci obsahu a reklam, poskytování funkcí sociálních médií
            a analýze naší návštěvnosti využíváme soubory cookie. Informace o
            tom, jak náš web používáte, sdílíme se svými partnery pro sociální
            média, inzerci a analýzy. Partneři tyto údaje mohou zkombinovat s
            dalšími informacemi, které jste jim poskytli nebo které získali v
            důsledku toho, že používáte jejich služby. Odkaz na informace o GDPR
            nalezente <span className="font-bold text-sky-400">zde</span>
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900 text-xs"
          onClick={() => setCookieConsent(false)}
        >
          Odmítnout
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg text-xs"
          onClick={() => setCookieConsent(true)}
        >
          Povolit
        </button>
      </div>
    </div>
  );
}
