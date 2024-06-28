"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

export function Socials() {

    const handleGithub=()=>{
        window.open('https://github.com/Rudra-Sankha-Sinhamahapatra')
    }

    const handleLinkedIn=()=>{
        window.open('https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/')
    }

    const handleX=()=>{
        window.open('https://x.com/RudraSankha')
    }

  return (
    <div className="h-48 relative md:w-22 w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg mt-4 md:ml-12 hover:bg-black border hover:-translate-y-3.5  md:hover:-translate-y-1/4 transition-transform duration-300 border-white">
       <h2 className="text-xl text-white font-semibold">Socials</h2>
      <div className="absolute bottom-1 inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className={cn("md:text-2xl text-xl font-serif  text-white relative z-20 px-4")}>
        <div className="flex flex-row gap-2 items-start">
            <div className="cursor-pointer" onClick={handleGithub}>
            <FaGithub/>
            </div>
            <div className="cursor-pointer" onClick={handleLinkedIn}>
           <FaLinkedin/>
           </div>
           <div className="cursor-pointer" onClick={handleX}>
           <FaSquareXTwitter/>
           </div>
        </div>
      </div>
    </div>
  );
}
