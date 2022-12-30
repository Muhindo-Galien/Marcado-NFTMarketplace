import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {

    const date = new Date().getFullYear();
    return (
    <div className='max-w-6xl pb-8 mx-auto  flex flex-col md:flex-row justify-between items-center font-globalFont text-gray-400 mb-4 absolute left-0  right-0'>
      <h2> &copy; {date} Marcado NFTMarketplace </h2>
      <h4 className='flex items-center'>Designed By Galien Dev
       <a href="https://twitter.com/GalienMuhindo" target='_blank'
       className='text-2xl ml-1 text-gradient'>
          <AiOutlineTwitter />
        </a>
       </h4>
      
    </div>
  )
}

export default Footer