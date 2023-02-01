import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const success_story = () => {
    return (
        <>
            <div className='w-[80%] lg:h-screen mx-auto pt-32'>
                <div className='text-center  text-5xl font-bold mb-16 tracking-wide'>Success Stories</div>
                <div className='flex justify-center items-center overflow-hidden gap-4'>


                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-96  h-80'>
                            <img className='w-full h-full object-cover rounded-lg' src="images\Simply Counsel.png" alt="simply" />
                        </div>
                        <div className='flex flex-col justify-around'>
                            <div className='text-md font-bold flex-shrink'>On Demand Service Booking Software...</div>
                            <div className='text-sm'>Service On Demand Service Booking Software...</div>
                            <span className='text-sm inline'>Read more<FaAngleRight className='inline ml-2 cursor-pointer'/></span>

                        </div>
                    </div>
                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-96  h-80'>
                            <img className='w-full h-full object-cover rounded-lg' src="images\ConnectifyIndia.png" alt="connectify" />
                        </div>
                        <div className='flex flex-col justify-around'>
                            <div className='text-md font-bold flex-shrink'>On Demand Service Booking Software...</div>
                            <div className='text-sm'>Service On Demand Service Booking Software...</div>
                            <span className='text-sm inline'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>
                        </div>
                    </div>
                  
                </div>
                <div className='w-[10%]  mx-auto'><button className='text-white bg-blue-800 px-10 py-2 rounded-md  my-20'>Checkout</button></div>
            </div>
        </>
    )
}

export default success_story