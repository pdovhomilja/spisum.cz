"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Dialog from "./Dialog";
import { formatDistance, subDays } from "date-fns";
import { PromptsHistory } from "@prisma/client";

type Props = {
  data: PromptsHistory[] | undefined;
};

const PromptsHistoryList = ({ data }: Props) => {
  const prompts = data;

  if (!prompts)
    return (
      <div className="w-full h-full overflow-auto">
        <div className="flex flex-col justify-start w-full gap-2 p-10">
          There is no prompts yet.
        </div>
      </div>
    );

  //console.log(prompts[0]);
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
              <TableHead className="w-[180px]">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Prompt</TableHead>
              <TableHead>User IP</TableHead>
              <TableHead>User agent</TableHead>
              <TableHead>Response</TableHead>
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
                <TableCell>
                  {formatDistance(
                    subDays(prompt?.date_created, 0),
                    new Date(),
                    { addSuffix: true }
                  )}
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
                <TableCell className="flex justify-center items-center">
                  <Dialog data={prompt?.response} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PromptsHistoryList;
