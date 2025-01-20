"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { ComputerDesktopIcon, XMarkIcon } from "@heroicons/react/24/solid";

import DemoRequestForm from "./forms/demo-form";

type Props = {
  title: string;
};

const OrderButton = ({ title }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-11/12 lg:w-1/2 h-2/3 md:h-1/2 rounded-md overflow-hidden">
              <div
                className="px-5 pr-9 justify-center  py-3 border w-3 rounded-br-md cursor-pointer hover:bg-slate-900 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="w-5 h-5" />
              </div>

              <div className="flex flex-col items-center justify-center p-10 h-full ">
                <div className="h-full space-y-10">
                  <h1 className="text-xl font-extrabold tracking-tight lg:text-5xl">
                    Chci přístup na Demo
                  </h1>
                  <DemoRequestForm setOpen={setOpen} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        <Button className="bg-[#FE9601] hover:bg-[#4154B3] gap-2">
          <ComputerDesktopIcon className="w-5 h-5" />
          {title}
        </Button>
      </div>
    </div>
  );
};

export default OrderButton;
