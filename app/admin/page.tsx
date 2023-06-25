import React from "react";
import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";

export const revalidate = 60;

const AdminPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <h1 className="text-xl">Admin Page</h1>
      <div className="w-full px-10 h-full overflow-auto">
        <PromptsList />
      </div>
      <div className="w-full ">
        <PromptForm />
      </div>
    </div>
  );
};

export default AdminPage;
