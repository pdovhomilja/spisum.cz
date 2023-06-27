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

const PromptsHistoryList = ({ data }: Props) => {
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
          <TableCaption>
            A list of user`s promps search on our web spisum.cz
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Prompt</TableHead>
              <TableHead>User IP</TableHead>
              <TableHead>User agent</TableHead>
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
                <TableCell>{prompt?.user_ip}</TableCell>
                <TableCell>{prompt?.user_browser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PromptsHistoryList;
