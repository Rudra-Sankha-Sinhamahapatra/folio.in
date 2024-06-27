import Link from "next/link"

  export const Navbar=()=>{
    return(
        <div className="mb-5">
        <nav className="top-0 left-0 right-0 flex flex-row justify-evenly font-mono text-white bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700  border border-gray-900 z-50">
        {/* <Link href="#home" passHref>Home</Link>
        <Link href="#skills" passHref>Skills</Link>
        <Link href="#projects" passHref>Projects</Link> */}
        Portfolio
        </nav>
        </div>
    )
  }