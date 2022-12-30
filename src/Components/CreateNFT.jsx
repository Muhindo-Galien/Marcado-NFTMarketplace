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
    resetForm()
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
          src='data:image/jpeg;base64,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'
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