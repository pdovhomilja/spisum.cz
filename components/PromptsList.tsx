"use client";
import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlayCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

type Props = {};

const PromptsList = (props: Props) => {
  const { data, error } = useSWR("/api/getprompts", fetcher, {
    refreshInterval: 1000,
  });
  const { toast } = useToast();

  const prompts = data?.prompts;

  const handleDelete = async (id: any) => {
    const response = await fetch("/api/deleteprompt", {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await response.json();
    toast({
      title: "Deleted prompt",
    });
  };

  const handleSetActive = async (id: any) => {
    const response = await fetch("/api/prompts/setActive", {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await response.json();
    toast({
      title: "Set active prompt",
    });
  };

  if (error) return <div>failed to load</div>;

  return (
    <div>
      {!data ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col justify-start w-full gap-2 p-10">
          <Table>
            <TableCaption>A list of your promps</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Prompt</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prompts.map((prompt: any, i: any) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {prompt?.id.substring(0, 4) +
                      "..." +
                      prompt?.id.substring(prompt.id.length - 4)}
                  </TableCell>
                  <TableCell
                    className={`${
                      prompt?.status === "INACTIVE"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {prompt?.status}
                  </TableCell>

                  <TableCell>{prompt?.prompt}</TableCell>
                  <TableCell className="flex justify-end pr-5 text-right">
                    <PlayCircleIcon
                      className="w-5 h-5 mr-2"
                      onClick={() => handleSetActive(prompt?.id)}
                    />
                    <TrashIcon
                      className="w-5 h-5"
                      onClick={() => handleDelete(prompt?.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default PromptsList;
