"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa6";

export const Projects: React.FC = () => {
  const handleGithub=()=>{
    window.open('https://github.com/Rudra-Sankha-Sinhamahapatra/MoneyTM-Payments-App')
}

const handleSite=()=>{
    window.open('https://money-tm-payments-rudra.vercel.app/')
}

const handleGithub2=()=>{
  window.open('https://github.com/Rudra-Sankha-Sinhamahapatra/Nexus-Quill')
}

const handleSite2=()=>{
  window.open('https://nexus-quill.vercel.app/')
}

const handleGithub3=()=>{
  window.open('https://github.com/Rudra-Sankha-Sinhamahapatra/Texon')
}

const handleSite3=()=>{
  window.open('https://texon-web.vercel.app/')
}

const handleGithub4=()=>{
  window.open('https://github.com/Rudra-Sankha-Sinhamahapatra/WebCode')
}

const handleSite4=()=>{
  window.open('https://web-code-phi.vercel.app/')
}


  return (
    <div className="max-w-5xl mx-4 md:mx-auto">
      <div className="text-white text-center font-semibold mt-5 mb-8 text-3xl">
        Projects
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white bg-gray-800 p-4 rounded-md hover:scale-[105%]  md:hover:scale-[120%] transition-all">
          <h2 className="text-white text-xl font-semibold mb-3">
            MoneyTM Payments
          </h2>
          <div className="flex flex-row gap-2 items-start mb-2">
          <div className="cursor-pointer text-white" onClick={handleGithub}>
            <FaGithub/>
            </div>
            <div className="cursor-pointer text-white" onClick={handleSite}>
            <FaFirefoxBrowser/>
            </div>
            </div>
          <p className="text-white mb-3">
            A Payment site inspired by Paytm,having a good user animated
            interface.User can register to receive some money.They can send or
            receive money.{" "}
          </p>
          <h2 className="text-white font-semibold  mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
            />

            <img
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
              alt="Express.js"
            />

            <img
              src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="TailwindCSS"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />

            <img
              src="https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white"
              alt="Mongoose"
            />
            <img
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
            />
            <img
              src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white"
              alt="Zod"
            />
          </div>
        </div>

        <div className="border border-white bg-gray-800 p-4 rounded-md hover:scale-[105%]  md:hover:scale-[120%] transition-all">
          <h2 className="text-white text-xl font-semibold mb-3">Nexus Quill</h2>
          <div className="flex flex-row gap-2 items-start mb-2">
          <div className="cursor-pointer text-white" onClick={handleGithub2}>
            <FaGithub/>
            </div>
            <div className="cursor-pointer text-white" onClick={handleSite2}>
            <FaFirefoxBrowser/>
            </div>
            </div>
        
          <p className="text-white mb-3">
            A Blogging site,having a good user interface.User can post their,see
            other people blogs,read a specific blog.
          </p>
          <h2 className="text-white font-semibold  mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/Hono-E36002.svg?style=for-the-badge&logo=Hono&logoColor=white"
              alt="Hono js"
            />

            <img
              src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="TailwindCSS"
            />
            <img
              src="https://img.shields.io/badge/Recoil-61dafb.svg?style=for-the-badge&logo=Recoil&logoColor=white"
              alt="Recoil"
            />
            <img
              src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white"
              alt="Zod"
            />
            <img
              src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
              alt="Prisma"
            />

            <img
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL"
            />

            <img
              src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white"
              alt="Cloudflare"
            />
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
          </div>
        </div>

        <div className="border border-white bg-gray-800 p-4 rounded-md hover:scale-[105%]  md:hover:scale-[120%] transition-all">
          <h2 className="text-white text-xl font-semibold mb-3">Texon</h2>
          <div className="flex flex-row gap-2 items-start mb-2">
          <div className="cursor-pointer text-white" onClick={handleGithub3}>
            <FaGithub/>
            </div>
            <div className="cursor-pointer text-white" onClick={handleSite3}>
            <FaFirefoxBrowser/>
            </div>
            </div>
        
          <p className="text-white mb-3">
            A Chatting site,having a friendly user interface.User can register
            by their name to join chat,can chat with other people ,read
            messages.
          </p>
          <h2 className="text-white font-semibold  mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
            />

            <img
              src="https://img.shields.io/badge/Socket.io-010101.svg?style=for-the-badge&logo=socketdotio&logoColor=white"
              alt="Socket.io"
            />

            <img
              src="https://img.shields.io/badge/Redis-FF4438.svg?style=for-the-badge&logo=Redis&logoColor=white"
              alt="Redis"
            />

            <img
              src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="TailwindCSS"
            />
            <img
              src="https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white"
              alt="Turborepo"
            />

            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
          </div>
        </div>

        <div className="border border-white bg-gray-800 p-4 rounded-md hover:scale-[105%]  md:hover:scale-[120%] transition-all">
          <h2 className="text-white text-xl font-semibold mb-3">Webcode</h2>
          <div className="flex flex-row gap-2 items-start mb-2">
          <div className="cursor-pointer text-white" onClick={handleGithub4}>
            <FaGithub/>
            </div>
            <div className="cursor-pointer text-white" onClick={handleSite4}>
            <FaFirefoxBrowser/>
            </div>
            </div>
        
          <p className="text-white mb-3">
            Webcode is a coding  site for beginners in web development.Users can code seemlessly in html,css,javascript having a friendly user interface.
          </p>
          <h2 className="text-white font-semibold  mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">

            <img
              src="https://img.shields.io/badge/CodeMirror-D30707.svg?style=for-the-badge&logo=CodeMirror&logoColor=white"
              alt="Codemirror"
            />

            <img
              src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="TailwindCSS"
            />

            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
