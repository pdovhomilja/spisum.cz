import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Omlouváme se ale takovou stránku nemáme
      </h1>
      <p className="py-20">
        Tady pro Vás nic zajímavého nemáme. Bude lepší když se vrátíte zpět na
        úvodní stránku, kde pro Vás máme informace o naše skvělém produktu
        SpisUm.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        <Button className="bg-orange-400 text-white outline">
          Zpět na úvod
        </Button>
      </Link>
    </div>
  );
}
