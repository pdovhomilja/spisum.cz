"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h1>Error message: {error.message} </h1>
      <div>
        <pre>Error stack: {error.stack}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
      <div className="flex gap-5">
        <Button
          onClick={reset}
          className="flex bg-slate-900 text-white rounded-md px-2 py-1 items-center justify-center"
        >
          Try again
        </Button>
        <Link
          href={"/"}
          className="flex bg-slate-900 text-white rounded-md px-2 py-1 items-center justify-center"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default error;
