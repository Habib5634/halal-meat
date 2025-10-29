'use client'
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('Beef');

    const categories = [
        {
            name: 'Beef',
            image: '/assets/beaf.png', // Replace with your actual image paths
            description: 'Premium quality halal beef cuts including steaks, ribs, and ground beef',
            
            features: ['100% Halal Certified', 'Grass-fed', 'Aged to Perfection']
        },
        {
            name: 'Chicken',
            image: '/assets/chicken.png',
            description: 'Fresh halal chicken varieties including whole chicken, breasts, and wings',
            features: ['Farm Fresh', 'No Hormones', 'Free Range']
        },
        {
            name: 'Lamb',
            image: '/assets/lamb.png',
            description: 'Tender halal lamb selections including chops, legs, and shanks',
            features: ['Premium Quality', 'Tender Cuts', 'Rich Flavor']
        },
        {
            name: 'Goat',
            image: '/assets/goat.png',
            description: 'Quality halal goat meat including curry cuts and specialty pieces',
            features: ['Lean Meat', 'Traditional Cuts', 'Fresh Daily']
        },
        {
            name: 'Special Cuts & Others',
            image: '/assets/barbecue.png',
            description: 'Specialty halal cuts and other premium meat products',
            features: ['Custom Cuts', 'Premium Selection', 'Expert Butchery']
        }
    ];

    const activeCategoryData = categories.find(cat => cat.name === activeCategory);

    return (
        <div className="relative    gap-11.5 pl-6  lg:pl-20">
            <h6 className='font-semobold text-xl text-[#D72638] mt-8'>OUR MENU</h6>
            <div className='flex flex-col justify-between gap-8'>

                <h1 className='livvic-font text-3xl md;text-[45px] max-w-[1065px] font-semibold leading-[100%]'>Explore Our Wide Range of Fresh, Premium Halal Meats – From Beef and Lamb to Chicken and Goat.</h1>
                <div className='flex items-center gap-4'>
                    <div className='h-[70px] border rounded-full w-[70px] flex justify-center items-center hover:bg-[#D72638]'><FaAngleLeft /></div>
                    <div className='h-[70px] border rounded-full w-[70px] flex justify-center items-center hover:bg-[#D72638]'><FaAngleRight /></div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-6 gap-10 lg:gap-20'>

                {/* Categories Navigation */}
                <div className=" col-span-1 flex gap-5 lg:gap-0 flex-row lg:flex-col lg; overflow-auto mb-16 mt-11 space-y-4">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`
                flex items-center min-w-[227px] h-[86px]  px-6 py-3 font-semibold transition-all duration-300 
                ${activeCategory === category.name
                                    ? 'bg-[#D72638] rounded-full border-2 text-white  shadow-lg transform scale-105'
                                    : ''
                                }
              `}
                        >
                            {activeCategory === category.name
                                ?
                                <div className='min-h-12 min-w-12 bg-white rounded-full flex justify-center items-center p-1.5 scale-90 mr-4'>

                                    <img src={category.image} alt="" className='' />
                                </div>
                                : <img src={category.image} alt="" className='mr-4' />}
                            <span className='text-2xl font-medium text-nowrap lg:overflow-hidden lg:text-ellipsis'>{category.name}</span>
                        </button>
                    ))}
                </div>
                <div className='col-span-2 flex mb-8 lg:mb-0 gap-9'>
                    <div className='relative w-[436px] h-[508px] rounded-[30px]'>
                        <div class="absolute inset-0 bg-[linear-gradient(359.23deg,rgba(0,0,0,0.7)_0.74%,rgba(0,0,0,0.212344)_42.39%,rgba(0,0,0,0)_99.45%)] rounded-[30px]"></div>
                        <img src="/assets/chicke.jpg" className='w-[436px] h-[508px] rounded-[30px] ' alt="" />
                        <div className='absolute bottom-6 left-6 text-white'>
                            <h3 className='text-[34px] font-medium'>Lamb Chops</h3>
                            <p className='text-[34px] font-bold  mt-2'><span className='text-2xl font-bold text-[#D72638]'>$</span>7.49</p>
                        <button className='text-lg flex gap-2 items-center'>Order Now <FaAngleRight className='ml-2' /></button>
                        </div>
                    </div>
                    <div className='relative w-[436px] h-[508px] rounded-[30px]'>
                        <div class="absolute inset-0 bg-[linear-gradient(359.23deg,rgba(0,0,0,0.7)_0.74%,rgba(0,0,0,0.212344)_42.39%,rgba(0,0,0,0)_99.45%)] rounded-[30px]"></div>
                        <img src="/assets/chicke2.jpg" className='w-[436px] h-[508px] rounded-[30px] ' alt="" />
                        <div className='absolute bottom-6 left-6 text-white'>
                            <h3 className='text-[34px] font-medium'>Lamb Chops</h3>
                            <p className='text-[34px] font-bold  mt-2'><span className='text-2xl font-bold text-[#D72638]'>$</span>7.49</p>
                        <button className='text-lg flex gap-2 items-center'>Order Now <FaAngleRight className='ml-2' /></button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Menu
