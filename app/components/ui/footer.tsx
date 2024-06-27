"use client"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export const Footer=()=>{
    const handleGithub=()=>{
        window.open('https://github.com/Rudra-Sankha-Sinhamahapatra')
    }

    const handleLinkedIn=()=>{
        window.open('https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/')
    }

    const handleX=()=>{
        window.open('https://x.com/RudraSankha')
    }

    return(
        <>
          <footer className="w-full  bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10">
        <div className="container mx-auto flex justify-between items-start px-10">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Rudra Sankha Sinhamahapatra@2024</h1>
          </div>
          <div>
            <h4 className="text-lg font-semibold">
              Socials
            </h4>
            <div className="flex space-x-4 mt-2">
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
      </footer>
        </>
    )
}