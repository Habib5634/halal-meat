import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const Delivered = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center pl-6  md:pr-6 ml-auto gap-6  max-w-[1260px] mt-30 '>
      <img src="/assets/elements.png" className='w-full max-w-[759px] h-full ' alt="" />
      <div className=' flex-1 w-full'>
        <h1 className='livvic-font text-[38px] md:text-[44px] font-bold leading-[47px] w-full max-w-[530px]'>Fresh Premium Halal Meats Delivered to Your Door.</h1>
        <p className='fot-medium manrope-font text-[#878680] leading-[30px] mt-2'>There are many variations of passages of available but the
          majortity have sufferred alteration in some form by injected
          humor or random word which don't look even.</p>

        <div className='flex gap-6 mt-10'>
          <FaCircleCheck size={40} color='#D72638' />
          <div>
            <h1 className='manrope-font font-extrabold text-2xl leading-[33px]'>Savor True Quality</h1>
            <p className='leading-[30px] text-[#878680] manrope-font font-medium'>Fresh, hand-slaughtered halal meats with authentic taste in every bite.</p>
          </div>
        </div>
        <div className='flex gap-6 mt-10'>
          <FaCircleCheck size={40} color='#D72638' />
          <div>
            <h1 className='manrope-font font-extrabold text-2xl leading-[33px]'>Convenient Delivery</h1>
            <p className='leading-[30px] text-[#878680] manrope-font font-medium'>Get your halal meats delivered straight to your door—fast and hassle-free</p>
          </div>
        </div>
        <div className='flex gap-6 mt-10'>
          <FaCircleCheck size={40} color='#D72638' />
          <div>
            <h1 className='manrope-font font-extrabold text-2xl leading-[33px]'>Pure & Wholesome</h1>
            <p className='leading-[30px] text-[#878680] manrope-font font-medium'>Our meats are free from hormones, antibiotics, and harmful chemicals.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivered
