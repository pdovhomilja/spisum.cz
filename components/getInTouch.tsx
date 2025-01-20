import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import ContactForm from "./forms/contact-form";

export default function GetInTouch() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Neváhejte nás kontaktovat
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pokud Vás naše řešení zaujalo, neváhejte nás kontaktovat, Váš
              kontakt předáme jednomu z našich implementačních partnerů <br />{" "}
              <br />
              <span className="font-bold"> SPISUM digital a.s.</span>
              <br />
              IČ: 223 69 953
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Švábova 772/18,
                  <br />
                  Praha 5, 152 00
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +420 (774) 960 960
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:info@spisum.cz"
                  >
                    info@spisum.cz
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="w-full p-10 text-black flex flex-col items-center justify-center">
          <ContactForm />
          <div className="text-black p-10 text-xs opacity-80">
            * Odesláním tohoto formuláře souhlasíte se zpracováním osobních
            údajů. Více o ochraně osobních údajů a Vašich právech naleznete (
            <Link
              href="/consent"
              target={"_blank"}
              className="underline hover:text-blue-500 cursor-pointer"
            >
              zde
            </Link>
            ) .
          </div>
        </div>
      </div>
    </div>
  );
}
