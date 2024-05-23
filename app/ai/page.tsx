"use client";
import { toast } from "react-hot-toast";

import { useCompletion } from "ai/react";

export default function AiHelpCenter() {
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/completion",
      onFinish: () => {
        // do something with the completion result
        toast.success("Successfully generated completion!");
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
      <div className="flex items-start w-2/3">
        <form onSubmit={handleSubmit} className="w-full px-10">
          <input
            className="w-full  bottom-0 border border-gray-300 rounded p-2 shadow-xl"
            value={input}
            placeholder="Napište Váš dotaz ..."
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className=" h-full w-2/3 px-10 ">
        <div className="my-6">{completion}</div>
      </div>
    </div>
  );
}
