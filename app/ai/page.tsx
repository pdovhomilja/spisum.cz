"use client";

import { toast } from "react-hot-toast";

import { useCompletion } from "ai/react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

export default function AiHelpCenter() {
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
  } = useCompletion({
    api: "/api/completion",
    onFinish: () => {
      toast.success("Successfully generated completion!");
      setInput("");
    },
  });

  return (
    <div className="mx-auto w-full h-full p-20 flex flex-col items-center justify-center gap-5 overflow-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
        Poradíme Vám s dotazy
      </h1>
      <p>
        Pomocí AI vám odpovíme na dotazy dle Vyhlášky 259/2012Sb., a zákona
        499/2004 Sb., tedy zákon o archivnictví a spisové služby a v neposlední
        řadě i NSESSS.
      </p>
      <div className="flex flex-col space-y-4 w-full ">
        <div className=" border rounded-md p-4 text-sm text-muted-foreground">
          <div>Spisum AI: Jak Vám můžu pomoci ?</div>

          <div>{completion}</div>
        </div>
        <div className="w-full ">
          <form onSubmit={handleSubmit} className="flex gap-2 w-full">
            <input
              className="w-full border border-gray-300 rounded-md p-2 shadow-xl text-sm text-muted-foreground"
              name="prompt"
              value={input}
              onChange={handleInputChange}
              id="input"
            />
            <Button type="submit">
              {isLoading ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                "Odeslat dotaz"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
