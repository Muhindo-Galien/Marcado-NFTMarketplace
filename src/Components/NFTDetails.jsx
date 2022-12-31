import React from 'react'
import Identicon from 'react-identicons'
import { useParams } from 'react-router-dom'
import { setGlobalState, truncate, useGlobalState } from '../store'

const NFTDetails = () => {
  const { id } = useParams()
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [nfts] = useGlobalState('nfts')
  const singleNft = nfts.find((nft)=>nft.id == id);
  const setNFT = () => {
    setGlobalState('nft', singleNft)
    setGlobalState('updateModal', 'scale-100')
  }

  
  return (
    <div className='max-w-6xl w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-between py-14 text-gray-500 font-globalFont gap-3 sm:gap-4'>
      <div className='md:w-2/5 w-full px-4  sm:px-0'>
        <img className='rounded-lg ' src={singleNft.metadataURI} alt="NFT" />
      </div>
      <div className='md:w-3/5 w-full px-4 sm:px-0'>
        <h2 className='text-3xl mb-2 font-globalFont font-semibold text-gray-400 capitalize'>{singleNft.title}</h2>
        <p className='text-sm my-2'>{singleNft.description}</p>
         <div className='my-3 flex flex-col'>
         <h3 className='py-2 px-6text-sm ext-gray-900 font-medium rounded-xl transition duration-200'>Owned by</h3>
          <div className='flex justify-start items-center'>
                  <Identicon
                    className='h-10 w-10 object-contain rounded-full'
                    string={singleNft.owner}
                    size={40}
                    />
                    <p className='ml-4 text-gray-400 font-medium'>{truncate(singleNft.owner,6,8,17)}</p>
            </div>
         </div>
            <div className='my-6'>
              <h3 className='text-lg mb-.5'>current price</h3>
              <h1 className='text-2xl mb-2 font-globalFont font-semibold text-gray-400'>{singleNft.cost} ETH</h1>
            </div>
            <div className=' flex gap-4 mt-6'>
              {
                connectedAccount == singleNft.owner ? (
                  <button  
                  className=' 
                  px-6 py-3 text-white font-semibold cursor-pointer
                   rounded-lg border border-[rgba(34,193,195,1)]
                    text-[rgba(34,193,195,1)]' onClick={setNFT}>Edit Price</button>
                  
                ):
                (
                  <button  className=' px-6 py-3 mr-2 text-white font-semibold cursor-pointer rounded-lg getstarted'>Buy Now</button>
                )
              }
            </div>
      </div>

    </div>
  )
}

export default NFTDetails