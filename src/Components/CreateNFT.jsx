import React, { useState } from 'react'
import {
  setGlobalState,
  useGlobalState,
} from '../store/index'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const CreateNFT = () => {
  const [modal] = useGlobalState('modal')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [imgBase64, setImgBase64] = useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault();
    closeModal()
  }
  const resetForm = ()=>{
    setFileUrl('')
    setDescription(nul)
    setTitle('')
    setPrice('')
  }
  const closeModal = () =>{
    setGlobalState('modal', 'scale-0')
    resetForm()
  }
  return (
    <div 
    className={`fixed top-0 left-0 w-screen h-screen
    flex items-center justify-center bg-black bg-opacity-30 
    transform duration-300 font-globalFont ${modal}`}
    >
      <div className='w-11/12 md:w-3/12 h-7/12 p-4 bg-gray-50 shadow-lg rounded-xl text-gray-400'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='flex items-center justify-between'>
              <h2 className='text-gray-400 font-semibold text-lg'>Create NFT</h2>
            <button type='button' onClick={closeModal}>
              <AiOutlineCloseCircle className='font-bold text-2xl text-gray-900'/>
            </button>
          </div>
          <div className='flex justify-center items-center rounded-lg mt-4'>
            <div className='w-20 h-20 overflow-hidden  shrink-0'>
              <img className='rounded-full h-full w-full object-cover cursor-pointer' 
          src='https://lawire.com/wp-content/uploads/elementor/thumbs/16-1-puzy5fol3t8ul4ioyf61thcaccskxusk57i5dftl68.png'
              alt="NFT" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center bg-gray-100 rounded-lg mt-5">
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:shadow-lg
                  file:text-sm file:font-semibold
                file:text-gray-400
                hover:file:text-gray-50
                  hover:file:bg-[rgba(34,193,195,1)]
                  cursor-pointer focus:ring-0 focus:outline-none"
              required
               />
            </label>
          </div>
          <div className="flex flex-row justify-between items-center bg-gray-50 border rounded-lg mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              required
              onChange={(e)=>setTitle(e.target.value)}
              value={title}

            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray-50 border rounded-lg mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
                type="number"
                step={0.01}
                min={0.01}
                name="price"
                placeholder="Price (Eth)"
                required
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray-50 border rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
              type="text"
              name="description"
              placeholder="Description"
              required
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex flex-row justify-center items-center
              w-full text-white 
              font-semibold
              px-6 py-2 bg-white getstarted rounded-lg
              drop-shadow-xl border border-transparent
              focus:outline-none focus:ring mt-5"
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNFT