"use client";
import React from "react";
import { cn } from "@/utils/cn";


export function Learning() {
  return (
    <div className="h-48 relative md:w-96 w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg ml-0 mt-4 md:ml-12 hover:bg-black border border-white hover:-translate-y-3.5  md:hover:-translate-y-1/4 transition-transform duration-300">
      <div className="absolute bottom-1 inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className={cn("md:text-2xl text-xl font-serif w-full text-white relative z-20 px-4")}>
        Web Developer <br />
        Currently Learning <br />
        System Design,Advanced devops,Web3 <br />
      </div>
    </div>
  );
}
