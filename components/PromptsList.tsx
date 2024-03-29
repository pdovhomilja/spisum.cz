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
import { useToast } from "./ui/use-toast";

type Props = {
  data: any;
};

const PromptsList = ({ data }: Props) => {
  const router = useRouter();
  const prompts = data?.prompts;
  const { toast } = useToast();

  if (!prompts)
    return (
      <div className="w-full h-full overflow-auto">
        <div className="flex flex-col justify-start w-full gap-2 p-10">
          There is no prompts yet.
        </div>
      </div>
    );

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
              <TableHead>Counter</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prompts.map((prompt: any, i: any) => (
              <TableRow key={i} className="">
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
                <TableCell>
                  <div className="flex justify-center items-center">
                    {prompt?.use_count}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center">
                    <PlayCircleIcon
                      title={"Activate prompt"}
                      className="w-5 h-5 mr-2 cursor-pointer"
                      onClick={async () => {
                        toast({
                          title: "Activating prompt",
                        });
                        await activatePrompt(prompt?.id);
                        toast({
                          title: "Prompt activated",
                        });
                        router.refresh();
                      }}
                    />
                    <TrashIcon
                      title={"Delete prompt"}
                      className="w-5 h-5 cursor-pointer"
                      onClick={async () => {
                        toast({
                          title: "Deleting prompt",
                        });
                        await deletePrompt(prompt?.id);
                        toast({
                          title: "Prompt deleted",
                        });
                        router.refresh();
                      }}
                    />
                  </div>
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
