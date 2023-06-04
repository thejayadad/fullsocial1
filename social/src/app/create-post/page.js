import React from 'react'

const CreatePost = () => {
  return (
   <section className='flex-col'>
    <h2>Create Post</h2>
    <form className='flex-col'> 
        <input placeholder='Title'/>
        <textarea placeholder='Description...'  />
                    <select >
                        <option value="Nature">Nature</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Ocean">Ocean</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Forest">Forest</option>
                    </select>
                    <label htmlFor='image'>
                        Upload Image 
                    </label>
                    <input id='image' type="file" style={{ display: 'none' }}  />
                  <button>Create</button>

    </form>
   </section>
  )
}

export default CreatePost