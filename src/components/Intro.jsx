import React from 'react'

const Intro = () => {
  return (
    <div className='w-[300px] border h-[100vh] bg-jacarta-50'>
      <div>
        <span className='text-md text-jacarta-600 font-semibold p-5'>Today</span>
        <div className='border p-4'>
          <div className='font-bold text-xl'>$19892</div>
          <div className='font-semibold text-jacarta-500 text-[10px]'>Account Balance</div>
        </div>

        <div className='border p-4'>
          <div className='font-bold text-md'>$4000</div>
          <div className='font-semibold text-jacarta-500 text-[10px]'>Year-to-Date Contributions</div>
        </div>

        <div className='border p-4'>
          <div className='font-bold text-md'>$1892</div>
          <div className='font-semibold text-jacarta-500 text-[10px]'>Total Interest</div>
        </div>

        <div className='border p-4'>
          <button className='text-white bg-accent-dark text-[14px] px-5 py-2 rounded-2lg'>
            I Want to
          </button>
        </div>

        <div className='border p-4'>
          <div>Recent Transaction</div>
          <div className='border text-xs font-semibold'>
            <div className=' text-jacarta-400 leading-6 '>2020-08-07</div>
            <div>Withdrawal Transfer to Bank-XXX11</div>
            <div className=' text-jacarta-200'>_______________________________________</div>
          </div>

          <div className='border text-xs font-semibold'>
            <div className=' text-jacarta-400 leading-6 '>2020-08-07</div>
            <div>Withdrawal Transfer to Bank-XXX11</div>
            <div className=' text-jacarta-200'>_______________________________________</div>
          </div>
          
          <div className='border text-xs font-semibold'>
            <div className=' text-jacarta-400 leading-6 '>2020-08-07</div>
            <div>Withdrawal Transfer to Bank-XXX11</div>
            <div className=' text-jacarta-200'>_______________________________________</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro
