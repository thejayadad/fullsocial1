import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const user = false
  return (
    <header className="body-font text-black border-b border-gray-200 p-8">
    <div className="container flex justify-between items-center m-auto max-w-screen-md align-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-black">
    <span className="ml-3 text-xl">Blog Site</span>
    </Link>
    <div>
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
    </div>
    </header>
  )
}

export default Navbar