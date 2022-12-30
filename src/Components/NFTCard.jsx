import React from 'react'
import Identicon from 'react-identicons'
import { Link } from 'react-router-dom'

export const NFTCard = ({nft}) => {
  return (
    <div className='p-4 border rounded-xl shadow-sm font-globalFont'>
       <Link to={'/nfts/' + nft}>

            <div className='flex justify-between items-center pb-2'>
                <div className='flex justify-center items-center'>
                  <Identicon
                    className='h-10 w-10 object-contain rounded-full'
                    string={'0x291...786a'}
                    size={30}
                    />
                    <p className='ml-4 text-gray-400 font-medium'>0x21...786a</p>
                </div>
                <p className='font-semibold'>12 ETH</p>
            </div>
            <img className='rounded-lg ' src="https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg" alt="NFT" />
            <h2 className='my-2  text-gray-500 font-medium'> Sad Karaba</h2>
            <button className='px-6 py-3 bg-gray-200 text-gray-600 rounded-xl w-full '>View Details</button>
       </Link>
    </div>
  )
}
