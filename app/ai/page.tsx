"use client";

import { useCompletion } from "ai/react";
export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <div className="mx-auto w-full h-full p-20 flex flex-col items-center justify-center gap-5 ">
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
