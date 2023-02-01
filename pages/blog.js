import React from 'react'

const blog = () => {
    return (
        <>
            <div className='bg-white w-[80%]  py-28 mx-auto'>
                <div className='text-3xl font-bold my-5 text-center'>Read Our Blog</div>
                <div className='flex justify-evenly flex-wrap items-center'>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <div className='md:w-72 h-72 w-full  relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full rounded-md' src="images/AINAW.png" alt="ainaw" />
                        </div>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>By Connectify India</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>10 signs you need career counselling...
                        </div>
                        <div><button className='text-red-400 bg-slate-50'>View More</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full rounded-md' src="images\Business Connect.png" alt="business" />
                        </div>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>By Connectify India</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>signs you need career counselling...                            
                        </div>
                        <div><button className='text-red-400 bg-slate-50'>View More</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full' src="images\Legal Aspire.png" alt="Legal" />
                        </div>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>By Connectify India</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>10 signs you need career counselling...
                        </div>
                        <div><button className='text-red-400 bg-slate-50'>View More</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full' src="images\Simply Counsel.png" alt="simply" />
                        </div>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>By Connectify India</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>10 signs you need career counselling...
                        </div>
                        <div><button className='text-red-400 bg-slate-50'>View More</button></div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default blog