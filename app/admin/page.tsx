import React from "react";

import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";

type Props = {};

const AdminPage = async (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      <h1 className="text-xl">Admin Page</h1>
      <div className="w-full px-10">
        <PromptsList />
      </div>
      <div className="w-full ">
        <PromptForm />
      </div>
    </div>
  );
};

export default AdminPage;
