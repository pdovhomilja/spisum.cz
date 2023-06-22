"use client";

import { useCompletion } from "ai/react";
export default function SloganGenerator() {
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <div className="mx-auto w-full h-full p-20 flex flex-col items-center justify-center gap-5 ">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-20">
        Poradíme Vám s dotazy
      </h1>
      <p>
        Pomocí AI vám odpovíme na dotazy dle Vyhlášky 259/2012Sb., a zákona
        499/2004 Sb., tedy zákon o archivnictví a spisové služby a v neposlední
        řadě i NSESSS.
      </p>
      <div className=" h-full w-2/3 px-10 ">
        <div className="my-6">{completion}</div>
      </div>

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
    </div>
  );
}

/*
"use client";

import { useCompletion } from "ai/react";
import { toast } from "react-hot-toast";
import { useDebouncedCallback } from "use-debounce";

export default function Completion() {
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/completion",
    onResponse: (res) => {
      // trigger something when the response starts streaming in
      // e.g. if the user is rate limited, you can show a toast
      if (res.status === 429) {
        toast.error("You are being rate limited. Please try again later.");
      }
    },
    onFinish: () => {
      // do something with the completion result
      toast.success("Successfully generated completion!");
    },
  });

  const handleInputChange = useDebouncedCallback((e) => {
    complete(e.target.value);
  }, 500);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col space-y-5 py-24">
      <p>Current state: {isLoading ? "Generating..." : "Idle"}</p>
      <textarea
        className="w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
        placeholder="Enter your prompt..."
        onChange={handleInputChange}
      />
      <p>{completion}</p>
    </div>
  );
}
*/
