import React from 'react'

const Artwork = () => {
  return (
    <div className='flex flex-col text-gray-400 w-full mx-auto justify-center items-center'>
      <h2 className='text-3xl mb-2 font-globalFont font-semibold'>Our Latest Artworks</h2>
      <p className='text-base text-gray-400 font-normal mb-4'>Check out our dailly updated artworks</p>
      
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5'>
        {Array(4)
        .fill()
        .map((nft,i)=>{
          return(
            <p key={i}>hello</p>
          )
        })}
      </div>
    </div>
  )
}

export default Artwork