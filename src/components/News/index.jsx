import React from 'react'

const News = () => {
  return (
    <div className='relative flex mt-7 justify-center items-start h-[600px] bg-no-repeat w-full flex-col ' style={{backgroundImage:"url(/assets/newsbg.png)"}}>
      <div className='w-full max-w-[648px] p-4 md:p-10 md:ml-6 lg:ml-20 rounded-[40px] bg-white mt-20 flex flex-col '>
    <h1 className='text-xl font-semibold leading-[28px] '>Subscribe to our newsletter</h1>
<p className='leading-[28px] mt-6 text-[#666666]'>Be the first to know about exclusive offers</p>

    <div className='h-[60px] mt-6 pl-5 p-1  flex justify-between items-center rounded-full border border-[#CCCCCC] '>
        <input type="text" className='flex-1 bg-transparent py-2 placeholder:text-[#666666] ' placeholder='Your Email' />
        <button className='h-full hidden sm:block rounded-full bg-[#D72638] text-white text-lg md:text-xl font-semibold px-3 md:px-6 '>Subscribe </button>

    </div>
        <button className='h-full block sm:hidden mt-3 rounded-full bg-[#D72638] text-white text-lg md:text-xl font-semibold px-3 md:px-6 '>Subscribe </button>

      </div>
    </div>
  )
}

export default News
