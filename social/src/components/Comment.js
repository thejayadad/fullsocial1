import React from 'react'

const Comment = () => {
  return (
    <section>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Here is the post Content from the user below</h2>
            <div className='flex justify-between'>
            <p class="text-gray-500">Arthur</p>
              <div>
              <span>Post Date</span>
            <span>Delete</span>
              </div>
            </div>           
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comment