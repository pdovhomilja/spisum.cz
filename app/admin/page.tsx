import React from "react";
import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

async function getPrompts() {
  const response = await fetch("http://localhost:3000/api/getprompts", {
    cache: "no-store",
  });
  const prompts = await response.json();
  return prompts;
}

const AdminPage = async () => {
  const data = await getPrompts();
  console.log(data, "data");

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
