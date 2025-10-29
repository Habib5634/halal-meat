import React from 'react'

const Gallery = () => {
    const stats = [
        {
            val: 8,
            title: "Years of Experience"
        },
        {
            val: 459,
            title: "Sq. Meter Area"
        },
        {
            val: 50,
            title: "Nice Meat"
        },
        {
            val: 3786,
            title: "Happy Visitors"
        }
    ]
    return (
        <>
            {/* Stats sectio */}

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#D72638]'>
                {stats.map((stat, index) => (
                    <div key={index} className='text-center p-4'>
                        <h3 className='text-[42px] font-semibold text-white'>{stat.val}+</h3>
                        <p className='text-sm font-medium text-white mt-2'>{stat.title}</p>
                    </div>
                ))}

            </div>

            {/* gallary section */}
            <div className='relative '>
                <img src="/assets/gal1.png" className='w-full h-[236px]' alt="" />
                <h1 className='tracking-[20px] md:tracking-[60px] lg:tracking-[123px] text-[60px] lg:text-[96px] font-semibold absolute top-20 z-10 left-1/2 -translate-x-1/2 leading-[100%] text-center text-white '>HALAL</h1>
            </div>


            <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-rows-5  ">
                <div className='grid col-span-2 lg:col-span-1 h-[983px] row-span-5'>

                    <div class="w-full  row-span-2  opacity-100 bg-[#4e3032] mix-blend-saturation relative">
                        <img src="/assets/lines.png" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                        <h1 className='text-[44px] font-medium leading-[140%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white '>Fresh,<br />
                            <span className='text-[#ff929d]'>Halal</span><br />
                            Delicious</h1>
                    </div>
                    <div class="w-full row-span-3   opacity-100  mix-blend-saturation relative">
                        <img src="/assets/chickencake.png" className='absolute col-span-1 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                    </div>
                </div>
                <div className='grid col-span-2 h-[983px]
 row-span-5'>

                    <div class="w-full  row-span-3 md:row-span-2 grid grid-cols-2 opacity-100 bg-[#0b1920]  relative">
                        <div className='col-span-2 md:col-span-1 relative'>

                            <img src="/assets/cake.png" className='absolute col-span-1 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                        </div>
                        <div className='col-span-2 md:col-span-1 bg-[#B30310] relative'>

                            <img src="/assets/square.png" className='absolute hidden md:block col-span-1 w-[267px] h-[256px] top-10  right-8 ' alt="" />
                            <img src="/assets/square.png" className='absolute hidden md:block col-span-1 w-[267px] h-[256px] bottom-10  left-8 ' alt="" />
                            <img src="/assets/square.png" className='absolute hidden md:block w-full  md:min-w-[414px] h-[414px] bottom-0  left-1/2 -translate-x-1/2 ' alt="" />
                            <h1 className='text-[24px] text-center leading-[140%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white '>
                                "Good days begin with faith, love, and a plate of halal meat."
                            </h1>
                        </div>
                    </div>
                    <div class="w-full row-span-3 grid grid-rows-3  opacity-100   relative">
                        <div class="w-full row-span-3 md:row-span-1  grid grid-cols-3  opacity-100   relative">
                            <div class="w-full col-span-3 md:col-span-1   opacity-100 bg-[#4e3032]   relative">
                                <h1 className='text-[36px] text-center  leading-[140%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white '>Discount <br />
                                    <span className='text-[40px]  font-semibold'>50%</span><br />
                                    Weekend</h1>
                            </div>
                            <div class="w-full col-span-3 md:col-span-2   opacity-100 bg-[#B30310]  relative">
                                <p className=' text-center font-[300] leading-[212%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-white '>Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.</p>
                            </div>


                        </div>
                        <div class="w-full row-span-3 md:row-span-2 grid grid-cols-2  opacity-100   relative">
                            <div class="w-full col-span-1  opacity-100   relative">
                                <img src="/assets/pizza.png" className='absolute col-span-1 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                            </div>
                            <div class="w-full col-span-1  opacity-100   relative">
                                <img src="/assets/sara.png" className='absolute col-span-1 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className='grid col-span-1 h-[983px]
 row-span-5'>

                    <div class="w-full  row-span-2 opacity-100 bg-[#257095] mix-blend-saturation relative">
                    </div>
                    <div class="w-full row-span-3   opacity-100 bg-[#843c44] mix-blend-saturation relative">
                    </div>
                </div> */}
                <div className='grid col-span-2 md:col-span-2 lg:col-span-1 h-[983px]
 row-span-5'>
                    <div class="w-full row-span-2 lg:row-span-3    opacity-100 bg-[#843c44] mix-blend-saturation relative">
                        <img src="/assets/chef1.png" className='absolute col-span-1 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                    </div>
                    <div class="w-full  row-span-2 opacity-100 bg-[#257095] mix-blend-saturation relative">
                        <img src="/assets/chef2.png" className='absolute col-span-1 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Gallery
