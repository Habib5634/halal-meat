import React from 'react'

const Work = () => {
    const work = [
        {
            img: "assets/w1.png",
            desc: "Healthy, Well-Raised Animals for Trusted Halal Meat",
        },
        {
            img: "assets/w2.png",
            desc: "Freshly Hand-Slaughtered Halal Meat, Prepared with Care",
        },
        {
            img: "assets/w3.png",
            desc: "Expertly Processed for Premium-Quality Halal Cuts",
        }
    ]
    return (
        <>
        <div className='relative flex justify-center h-full bg-no-repeat w-full flex-col items-center' style={{backgroundImage:"url(/assets/workbg.png)"}}>
            {/* <img src="/assets/workbg.png" className='h-full w-full ' alt="" /> */}
            <div className='absolut   w-full max-w-[1280px] h-full  px-4 mt-20'>
                <h1 className='text-white livvic-font text-[50px] text-center mb-12'>How It Works</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {work.map((item, idx) => (
                        <div className='rounded-[10px]' key={idx}>
                            <img src={item.img} alt="" className='h-[364px] w-full rounded-t-[10px]' />
                            <div className='bg-black text-white py-7 px-2 rounded-b-[10px]'>
                                <p className='text-xl font-bold livvic-font '>{item.desc}</p>

                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>

            <button className='w-[288px] py-3 bg-[#D72638] rouded-md  text-white font-bold livvic-font mt-12'>Build a Box</button>
        </div>
        
        </>
    )
}

export default Work
