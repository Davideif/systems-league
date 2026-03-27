import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full  border-b border-border shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
  
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold underline">
          Logo
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center  -ml-50 gap-10 font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link
            href="/daily-plan"
            className="inline-block px-4 py-1 font-medium border-4 border-black rounded-xl"
          >
            Daily Plan
          </Link>
          <Link href="/systems" className="hover:underline">
            Systems
          </Link>
        
          
        </div>



        {/* Right Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className=" bg-blue-500 px-4 py-2 rounded-xl border-blue-500  hover:bg-blue-600 text-white hover:text-white ">League &#127942;</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Sign In</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

