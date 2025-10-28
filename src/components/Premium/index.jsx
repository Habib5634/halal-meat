import React from 'react'

const Premium = () => {
    return (
        <div className=' flex flex-col h-[705px] lg:flex-row'>
            <img src="/assets/meatpr.png" alt="" className='max-w-full' />
            <div className='h-full flex-1 bg-[#B30310] flex flex-col justify-center items-start text-white p-8'>
        <div className=''>
            <h2 className='text-xl text-white mb-5'>MODERN HALAL MEATS</h2>
            <h2 className='text-[50px] max-w-[651px] leading-[100%] font-semibold text-white livvic-font '>Providing Fresh & Premium 
Halal Meat</h2>

<div className="max-w-4xl mx-auto space-y-10 mt-12.5">
        {/* --- Commitment to Quality --- */}
        <div className="flex items-start space-x-4">
          <img
            src="/icons/pricon.png" // replace with your actual icon path
            alt="Quality Icon"
            className="w-[90px] h-[90px]"
          />
          <div>
            <h3 className="text-2xl font-semibold">Our Commitment to Quality</h3>
            <p className="text-lg opacity-90 mt-1">
              We ensure every cut is 100% Halal, fresh, and carefully selected for your family's health and satisfaction.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/40"></div>

        {/* --- Healthy & Delicious Choices --- */}
        <div className="flex items-start space-x-4">
          <img
            src="/icons/pricon2.png" // replace with your actual icon path
            alt="Healthy Icon"
            className="w-[90px] h-[90px]"
          />
          <div>
            <h3 className="text-2xl font-semibold">Healthy & Delicious Choices</h3>
            <p className="text-lg opacity-90 mt-1">
              Our meats are naturally raised and prepared with care, giving you the taste and nutrition you deserve.
            </p>
          </div>
        </div>
      </div>
        </div>
            </div>

        </div>
    )
}

export default Premium
