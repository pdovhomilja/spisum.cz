import React from "react";
import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";

type Props = {};

const AdminPage = async (props: Props) => {
  const { userId } = auth();
  const user = await currentUser();

  const handleCreatePost = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "My post",
        content: "This is my post",
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  if (!user) return <div>Not logged in</div>;
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
