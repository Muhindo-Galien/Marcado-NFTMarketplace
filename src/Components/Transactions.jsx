import React from 'react';
import {BiTransfer} from 'react-icons/bi'
import {AiOutlineReload} from 'react-icons/ai'
import {MdOpenInNew} from 'react-icons/md'

const Transactions = () => {
  return (
    <div className='my-4  pb-10 mx-auto font-globalFont'>
      <h2 className='mb-4 text-gray-400 text-3xl font-globalFont font-semibold text-center '>Transaction History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-2 py-2.5 mx-4">
        {Array(5)
        .fill()
        .map((trans,i)=>{
          return(
            <Transaction key={i} trans = {i+1}/>
          )
        })}
      </div>
      <div className="flex flex-row justify-center mt-5">
        <button className=' px-6 py-3 bg-white rounded-3xl getstarted text-gray-50 flex flex-row justify-center items-center gap-1'>Load More <AiOutlineReload/></button>
      </div>
    </div>
  )
}

export default Transactions

const Transaction = ({trans})=>{
  return(
    <div 
    className='flex justify-between items-center border  text-gray-500 w-full shadow-sm rounded-lg px-3 py-1'>
      <div className='rounded-md p-1 shadow-sm text-green-700 text-2xl'>
        <BiTransfer/>
      </div>
      <div className=''> 
        <h4 className='text-sm text-center'>{trans} Fund Transfered</h4>
        <small className="flex flex-row justify-start items-center">
          <span className='mr-1'>Received by</span>
          <a href="#" target='_blank' className='text-green-700'>
            0xsasd...23j2
          </a>
          <a href="#">
            <MdOpenInNew className='text-gray-600 text-lg'/>  
          </a>
        </small>
      </div>
      <p className='text-sm font-medium'>0.44 ETH</p>
      </div>
  )
}