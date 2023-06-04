import React from 'react'

const Register = () => {
  return (
    <section className='p-4'>
    <div class="bg-white flex flex-col m-auto max-w-screen-sm">
   <h2 class="text-gray-900 text-center text-lg mb-1 font-medium title-font">Register</h2>
   <div class="relative mb-4">
     <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
     <input type="text" id="username" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
   </div>
   <div class="relative mb-4">
     <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
     <input type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
   </div>
   <div class="relative mb-4">
     <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
     <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
   </div>
   <button class="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Register</button>
 </div>
</section>
  )
}

export default Register