import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import Identicon from 'react-identicons'
import { Link } from 'react-router-dom'

const Artwork = () => {
  return (
    <div className='flex flex-col text-gray-400 w-full mx-auto justify-center items-center font-globalFont'>
      <h2 className='text-3xl mb-2 font-globalFont font-semibold'>Our Latest Artworks</h2>
      <p className='text-base text-gray-400 font-normal mb-4'>Check out our dailly updated artworks</p>
      
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5 mx-4'>
        {Array(4)
        .fill()
        .map((nft,i)=>{
          return(
            <Card key={i} nft = {i+1}/>
          )
        })}
      </div>
      <div className="flex flex-row justify-center my-5">
        <button className=' px-6 py-3 bg-white rounded-3xl getstarted text-gray-50 flex flex-row justify-center items-center gap-1'>Load More <AiOutlineReload/></button>
      </div>
    </div>
  )
}
export default Artwork

const Card=({nft})=>{
  return(
    <div className='p-4 border rounded-xl shadow-sm font-globalFont bg-gray-50'>
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
                <p className='text-gradient'>12 ETH</p>
            </div>
            <img className='rounded-lg ' src="https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg" alt="NFT" />
            <h2 className='my-2  text-gray-500 font-medium'> Sad Karaba</h2>
            <button className='px-6 py-3 bg-gray-200 text-gray-600 rounded-xl w-full '>View Details</button>
       </Link>
    </div>
  )
}