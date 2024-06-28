"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { CiMail } from "react-icons/ci";

export function Education() {
  return (
    <div className="h-48 relative md:w-96 overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg mt-4 md:mt-0 ml-0 w-full md:ml-12 hover:bg-black border border-white hover:-translate-y-3.5  md:hover:-translate-y-1/4 transition-transform duration-300">
      <div className="absolute bottom-1 inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className={cn("md:text-2xl text-xl font-serif w-full text-white relative z-20 px-4")}>
        Rudra Sankha Sinhamahapatra 
        <div className="flex flex-row mt-1 mb-1">
            <div className="mt-2">
        <CiMail/>
        </div>
         rssmp120@gmail.com 
        </div>
        B.Tech CSE 
        <div className="mt-1 mb-1">
        Kalinga Institute of Technology <span className="font-semibold text-blue-500">(2022-2026)</span>
        </div>
      </div>
    </div>
  );
}
