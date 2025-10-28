import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const Intro = () => {
  return (
    <div className='relative'>
        <div className='w-[562px] h-[497px] bg-[#D72638] absolute top-0 left-0'>
<img src="/assets/intro1.png" alt="" className='w-full h-full mix-blend-color ' />
        </div>

       <div className="relative max-w-[1353px] flex justify-between flex-col lg:flex-row items-center  gap-11.5 px-6 py-16 lg:py-[119px] lg:px-20">
            <div className='relative'>
                <img src="/assets/intromain.png" className='w-[564px] h-[651px]' alt="" />
                <img src="/assets/intro2.png" className='w-[428px] h-[140px] absolute -bottom-16 -translate-x-1/2 left-1/2' alt="" />
            </div>
            <div>
                <h3 className='text-xl leading-[30px] uppercase'>Our Introductio</h3>
                    <h1 className='livvic-font text-[50px] max-w-[524px] font-semibold leading-[100%]'>Pure Halal Meat and Fresh Quality</h1>

                <div className='mt-14'>
                    <h1 className='livvic-font font-medium text-[30px] text-[#B6282D]  leading-[100%] trackig-[0px] '>We’re Leader in Halal Meat Market</h1>
                    <p className='max-w-[693px]'>We provide fresh, high-quality halal meat sourced from trusted suppliers, ensuring every cut meets strict halal standards. Our commitment is to bring healthy and safe meat directly to your table.</p>
                    <p className='flex items-center gap-2 mt-14'><FaCircleCheck color='#B6282D' size={20} />Halal meat certified and responsibly sourced</p>
                    <p className='flex items-center gap-2 mt-5'><FaCircleCheck color='#B6282D' size={20} />Fresh cuts delivered to meet your needs</p>
                    <p className='flex items-center gap-2 mt-5'><FaCircleCheck color='#B6282D' size={20} />Halal meat certified and responsibly sourced</p>
                 
                </div>
            </div>

      </div>
    </div>
  )
}

export default Intro
