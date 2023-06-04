import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>

<div class="p-1 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">thejayadad@gmail.com</a>
          <p class="leading-normal my-5">388 Relaxing Blvd
            <br />Beach City, NT 90000
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
               <AiFillFacebook size={26} />
            </a>
            <a class="ml-4 text-gray-500">
              <AiFillInstagram size={26} />

            </a>
            <a class="ml-4 text-gray-500">
              <AiFillYoutube size={26} />
            </a>
            <a class="ml-4 text-gray-500">
             <AiFillTwitterCircle size={26} />
            </a>
          </span>
        </div>
    </footer>
  )
}

export default Footer