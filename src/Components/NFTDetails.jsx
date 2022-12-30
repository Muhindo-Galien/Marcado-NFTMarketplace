import React from 'react'
import Identicon from 'react-identicons'
import { setGlobalState } from '../store'

const NFTDetails = () => {
  return (
    <div className='max-w-6xl w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-between py-14 text-gray-500 font-globalFont gap-3 sm:gap-4'>
      <div className='md:w-2/5 w-full px-4  sm:px-0'>
        <img className='rounded-lg ' src="https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg" alt="NFT" />
      </div>
      <div className='md:w-3/5 w-full px-4 sm:px-0'>
        <h2 className='text-3xl mb-2 font-globalFont font-semibold text-gray-400'>Sad Karaba</h2>
        <p className='text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio
           dolorem doloribus mollitia animi esse quas
            rerum repellendus ratione? Reprehenderit! dolorem doloribus mollitia animi esse quas
            rerum repellendus ratione? </p>
         <div className='my-3 flex flex-col'>
         <h3 className='py-2 px-6text-sm ext-gray-900 font-medium rounded-xl transition duration-200'>Owned by</h3>
          <div className='flex justify-start items-center'>
                  <Identicon
                    className='h-10 w-10 object-contain rounded-full'
                    string={'0x291...786a'}
                    size={40}
                    />
                    <p className='ml-4 text-gray-400 font-medium'>0x21...786a</p>
            </div>
         </div>
            <div className='my-6'>
              <h3 className='text-lg mb-.5'>current price</h3>
              <h1 className='text-2xl mb-2 font-globalFont font-semibold text-gray-400'>25.50 ETH</h1>
            </div>
            <div className=' flex gap-4 mt-6'>
              <button  className=' px-6 py-3 mr-2 text-white font-semibold cursor-pointer rounded-lg getstarted'>Buy Now</button>
              <button  
              className=' 
              px-6 py-3 text-white font-semibold cursor-pointer
               rounded-lg border border-[rgba(34,193,195,1)]
                text-[rgba(34,193,195,1)]' onClick={()=>setGlobalState('updateModal','scale-100',)}>Edit Price</button>
            </div>
      </div>

    </div>
  )
}

export default NFTDetails