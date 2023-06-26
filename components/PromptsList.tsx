"use client";
import React from "react";
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
import { deletePrompt } from "@/lib/actions/deletePrompt";
import { activatePrompt } from "@/lib/actions/activatePrompt";
import { useRouter } from "next/navigation";

type Props = {};

const PromptsList = ({ data }: any) => {
  const router = useRouter();
  const prompts = data?.prompts;

  return (
    <div className="w-full h-full overflow-auto">
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
                    title={"Activate prompt"}
                    className="w-5 h-5 mr-2 cursor-pointer"
                    onClick={() => {
                      activatePrompt(prompt?.id);
                      router.refresh();
                    }}
                  />
                  <TrashIcon
                    title={"Delete prompt"}
                    className="w-5 h-5 cursor-pointer"
                    //onClick={() => handleDelete(prompt?.id)}
                    onClick={() => {
                      deletePrompt(prompt?.id);
                      router.refresh();
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PromptsList;
