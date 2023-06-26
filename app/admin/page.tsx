"use client";
import React from "react";
import PromptForm from "@/components/PromptForm";
import PromptsList from "@/components/PromptsList";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const AdminPage = async () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return (
      <div className="flex flex-col gap-5 w-full h-full items-center justify-center">
        <h1 className="text-xl">Admin Page</h1>
        <p>You must be sign in to view this content</p>
        <Link
          href={"/sign-in"}
          className="bg-orange-500 text-white rounded-md px-2 py-1"
        >
          Sign-In
        </Link>
      </div>
    );
  }

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
