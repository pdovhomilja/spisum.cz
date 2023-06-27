import React from "react";
import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";

async function getPrompts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prompts/getprompts`,
    {
      cache: "no-store",
    }
  );
  const prompts = await response.json();
  return prompts;
}

const AdminPage = async () => {
  const data = await getPrompts();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <h1 className="text-xl">Admin Page</h1>
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
