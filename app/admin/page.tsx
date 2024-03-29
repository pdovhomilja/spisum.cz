import React from "react";
import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";
import { getPrompts } from "@/lib/actions/getPrompts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const revalidate = 10;

const AdminPage = async () => {
  const data = await getPrompts();

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
