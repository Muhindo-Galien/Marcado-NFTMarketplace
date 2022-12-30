import React from 'react'
import Identicon from 'react-identicons'
import { NFTCard } from './NFTCard'

const MyList = () => {
  return (
    <div className='max-w-6xl mx-auto my-10'>
       <h2 className='text-3xl mb-4 font-globalFont font-semibold text-gray-400 mx-4'>My Account </h2>
       <div className='bg-white p-4 rounded-lg w-[280px] mx-4'>
        <div className='flex justify-start items-center'>
            <Identicon
              className='h-10 w-10 object-contain rounded-full'
              string={'0x291...786a'}
              size={40}
              />
              <p className='ml-4 text-sm text-gray-300 font-semibold'>0x21dgywdis...kd5ioj786a</p>
        </div>
       </div>
       <div className='my-6'>
          <h2 className='text-3xl mb-2 font-globalFont font-semibold text-center text-gray-400'>All My NFT's</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5 mx-4'>
              {Array(4)
              .fill()
              .map((nft,i)=>{
                return(
                  <NFTCard key={i} nft ={i+1}/>
                )
              })}
            </div>
       </div>
    </div>
  )
}

export default MyList