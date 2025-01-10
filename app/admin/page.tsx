import React, { useActionState } from "react";
import Link from "next/link";
import { unstable_noStore } from "next/cache";

import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";
import { buttonVariants } from "@/components/ui/button";

import { getPrompts } from "@/lib/actions/getPrompts";

const AdminPage = async () => {
  //Always fetch fresh data on the server
  unstable_noStore();

  // Fetch the data
  const data = await getPrompts();

  //Console log the data
  //console.log(data);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <h1 className="text-xl">Admin Page</h1>
      <div>
        <Link
          href={"/admin/history"}
          className={
            buttonVariants({ variant: "outline" }) + " bg-slate-900 text-white"
          }
        >
          Prompt history
        </Link>
      </div>
      <div className="w-full px-10 h-full overflow-auto">
        <PromptsList data={data} />
      </div>
      <div className="w-full ">
        <PromptForm />
      </div>
    </div>
  );
};

export default AdminPage;
