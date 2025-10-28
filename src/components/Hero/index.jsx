import React from 'react'

const Hero = () => {
    
  return (
   <section className="relative w-full   h-screen flex items-center justify-start">
      
      {/* Overlay for Dark Shade */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left Content */}
      <div className="relative max-w-[1353px]  px-6 lg:px-20">
        <div className="text-white max-w-xl">
          
          {/* Logo Placeholder */}
          <h2 className="text-white relative livvic-font font-bold text-[40px] mb-4">
            Halal Meat
            <img src="/assets/underline.png" className='absolute w-[215px] -bottom-3 left-0' alt="" />
          </h2>

          {/* Title */}
          <h1 className="text-5xl relative lg:text-[96px] livvic-font font-bold leading-[100%] ">
            Eat Cleaner 
             <img src="/assets/leaf.png" className='absolute w-[75px] -right-3 -top-7' alt="" />
          </h1>
          <h1 className="text-5xl lg:text-[70px] livvic-font font-bold leading-[100%] mb-4">
             With Halal Meat
          </h1>

          {/* Description */}
          <p className="text-base lg:text-xl  font-semibold tracking-[0.5px]  leading-[32px] text-gray-200 mb-8">
            Discover premium, hand-slaughtered Halal meats delivered fresh to your doorstep — ethically sourced, USDA certified, and prepared with care to bring authentic taste and peace of mind to every meal.
          </p>

          {/* CTA Button */}
          <button className="bg-[#D72638] text-white font-bold px-8 py-3 rounded-lg  transition">
            BUILD YOUR BOX
          </button>
        </div>
      </div>

      {/* Right Vertical Social Icons */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-20 text-white text-[10px] tracking-wide">
        <a href="#" className="rotate-90 hover:text-[#D72638] transition">Instagram</a>
        <a href="#" className="rotate-90 hover:text-[#D72638] transition">Facebook</a>
        <a href="#" className="rotate-90 hover:text-[#D72638] transition">LinkedIn</a>
      </div>
    </section>
  )
}

export default Hero
