"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";

const Dialog = ({ data }: any) => {
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
              <div className="h-full ">
                <h1 className="text-xl font-extrabold tracking-tight lg:text-5xl p-5">
                  Result from API
                </h1>
                <p className="px-10 h-full overflow-auto">{data}</p>
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
        <EyeIcon
          className="w-4 h-4 mr-2 cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default Dialog;
