import React from 'react'

const EditPage = () => {
  return (
    <section className='h-screen p-4'>
    <h2 className='text-center mb-4'>Edit Post</h2>
    <form className='flex flex-col'> 
      <input placeholder='title' type="text" id="title" name="title" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4" />
        <textarea placeholder='Description'  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-4"></textarea>
      <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4'>
          <option value="Nature">Nature</option>
          <option value="Mountain">Mountain</option>
          <option value="Ocean">Ocean</option>
          <option value="Wildlife">Wildlife</option>
          <option value="Forest">Forest</option>
      </select>
      <input placeholder='Image' id='image' type="file" className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4'  />
      <button class="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Create Post</button>
    </form>
   </section>
  )
}

export default EditPage