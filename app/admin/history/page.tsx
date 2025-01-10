import PromptsHistoryList from "@/components/PromptsHistoryList";
import { buttonVariants } from "@/components/ui/button";
import { getPromptsHistory } from "@/lib/actions/getPromptsHistory";
import Link from "next/link";
import React from "react";

const HistoryPage = async () => {
  const data = await getPromptsHistory();

  //console.log(data);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <h1 className="text-xl">Admin Page</h1>
      <div>
        <Link
          href={"/admin"}
          className={
            buttonVariants({ variant: "outline" }) + " bg-slate-900 text-white"
          }
        >
          Admin home
        </Link>
      </div>
      <div className="w-full px-10 h-full overflow-auto">
        <PromptsHistoryList data={data} />
      </div>
    </div>
  );
};

export default HistoryPage;
