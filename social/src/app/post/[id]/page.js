import React from 'react'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'


const PostDetail = () => {
  return (
   <section className='flex-col'>
    <h1 class="title-font text-center text-lg font-medium text-gray-900 mb-1">Post Title</h1>
    <h2 class="tracking-widest text-center text-xs title-font font-medium text-gray-400 mb-1">Date</h2>
    <h2 class="tracking-widest text-center text-xs title-font font-medium text-gray-900  mb-1">By Dunbar</h2>
    <div className='text-center border-gray-200'>
    <button
    className="text-center inline-flex border-gray-200 items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mb-4"
    ><BsFillPencilFill/> Edit</button>
        <button
    className="text-center inline-flex border-gray-200 items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mb-4"
    ><AiFillDelete /> Delete
    </button>
    </div>
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-screen w-full object-cover object-center" src="https://images.pexels.com/photos/1868991/pexels-photo-1868991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="blog" />
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
    
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
                <button class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <AiFillLike  size={16}  /> 
                {/* <AiOutlineLike size={20} onClick={handleLike} /> */}
                </button>1.2K
              </span>
            </div>
          </div>
        </div>


   </section>
  )
}

export default PostDetail