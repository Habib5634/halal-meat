import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaUndo } from 'react-icons/fa';

const HealthySection = () => {
    const stats=[
        {
            icon: <img src="/icons/h1.svg" alt="Fresh Icon"  />,
            title:"Return Policy",
            desc:'Money Back Guarantee'
        },
        {
            icon: <img src="/icons/h2.svg" alt="Delivery Icon"  />,
            title:"Free Shipping",
            desc:'On All Orders Over $45.00'
        },
        {
            icon: <img src="/icons/h3.svg" alt="Support Icon"  />,
            title:"Store Locator",
            desc:'Find Your Nearest Store'
        }
    ]
  return (
    <div className="relative">
     <img src="/assets/healthy.png" className='h-full w-full ' alt=""  />
     <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center gap-6'>
        <h1 className='text-[60px] livvic-font text-center max-w-4xl font-[900] leading-[74px] text-white'>Stay Healthy & Enjoy Fresh, Premium Halal Meats</h1>
    <button className='bg-[#D72638] font-bold text-white px-5 py-3 rounded-md '>Shop Now</button>
     </div>

     <div className='bg-white absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-[1170px] grid grid-cols-1 lg:grid-cols-3 px-6 gap-6 py-8 shadow-lg rounded-lg'>
    {stats.map((item, index)=>(
        <div key={index} className='flex items-center gap-4'>
            {/* <div className='bg-[#F5F5F5] p-4 rounded-full'> */}
                {item.icon}
            {/* </div> */}
            <div>
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p className='text-gray-600'>{item.desc}</p>
            </div>
        </div>
    ))}
     </div>
    </div>
  );
};

export default HealthySection;
