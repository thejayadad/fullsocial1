import React from 'react'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'


const Post = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-7 py-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-screen w-full object-cover object-center" src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="blog" />
          <div class="p-6">
            <div className='flex justify-between align-center '>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">CATEGORY</h2>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">By Dunbar</h2>
            </div>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-1">The Catalyzer</h1>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mr-4">Date</h2>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
                <button class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <AiFillLike  size={16}  /> 
                {/* <AiOutlineLike size={20} onClick={handleLike} /> */}
                </button>1.2K
              </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Post