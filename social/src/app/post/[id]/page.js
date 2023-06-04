import React from 'react'

const PostDetail = () => {
  return (
   <section className='flex-col'>
    <h1 class="title-font text-center text-lg font-medium text-gray-900 mb-1">Post Title</h1>
    <h2 class="tracking-widest text-center text-xs title-font font-medium text-gray-400 mb-1">Date</h2>
    <h2 class="tracking-widest text-center text-xs title-font font-medium text-gray-900  mb-1">By Dunbar</h2>
    <div className='text-center'>
    <button
    className="text-center inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >Edit Post</button>
        <button
    className="text-center inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >Delete</button>
    </div>
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-screen w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
          <div class="p-6">
            <div className='flex justify-between'>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mr-4">CATEGORY</h2>
            </div>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.

            </p>
            <div class="flex items-center flex-wrap ">
    
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>


   </section>
  )
}

export default PostDetail