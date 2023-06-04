import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const user = false
  return (
    <header className="body-font text-black border-b border-gray-200 p-8">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
    <span className="ml-3 text-xl">Blog Site</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-5">
          <Link 
          className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          href={"/"}>Home</Link>
          <Link 
          className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          href={"/blogs"}>Blogs</Link>
          <Link 
          className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          href={"/about"}>About</Link>
          <Link 
           className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          href={"/"}>Contact</Link>
        </nav>
        {user ? (
          <>
          <Link
          
          href={"/create-post"}
            className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Create Post
          </Link>
          <Link
          
          href={"/"}
            className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Logout
          </Link>
          </>
        ) : (
          <>
          <Link
          href={"/login"}
            className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Login
          </Link>
          <Link
          href={"/register"}
            className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Register
          </Link>
          </>
        )}
    </div>
    </header>
  )
}

export default Navbar