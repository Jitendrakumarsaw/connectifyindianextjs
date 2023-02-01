import React from 'react'
import Link from 'next/link'

const video_testimonial = () => {
  return (
    <>
      <div className='w-full bg-white mt-16'>
        <div className='w-[80%] mx-auto'>
          <h2 className='underline py-2 text-2xl font-bold'>Video sample of social connect and Testimonial-LawSikho</h2>
          <div className="bg-slate-100 border-2 border-slate-800 py-4">
            <h1 className='text-center text-3xl font-bold text-gray-800 mb-10'>Video Testimonials</h1>
            <div className='flex justify-evenly gap-3 items-center flex-wrap'>
              <div className='bg-white w-96 h-72 flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=zhL2EKrkZbk"><img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2'>Title: Video</div>
                <div className='mb-1 px-2'>Name: Jitendra</div>
                <div className='mb-1 px-2'>Description: This is Testimonial Video</div>
              </div>
              <div className='bg-white w-96 h-72  flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=KO8n02g-Ezc"><img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2'>Title: Video</div>
                <div className='mb-1 px-2'>Name: Jitendra</div>
                <div className='mb-1 px-2'>Description: This is Testimonial Video</div>
              </div>
              <div className='bg-white w-96 h-72  flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=qZno3Yk8QKc"><img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2'>Title: Video</div>
                <div className='mb-1 px-2'>Name: Jitendra</div>
                <div className='mb-1 px-2'>Description: This is Testimonial Video</div>
              </div>
              <div className='bg-white w-96 h-72  flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=XkyIjzDZPyE"><img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2'>Title: Video</div>
                <div className='mb-1 px-2'>Name: Jitendra</div>
                <div className='mb-1 px-2'>Description: This is Testimonial Video</div>
              </div>
              <div className='bg-white w-96 h-72  flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=E7mGqt7v3Uc"><img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2'>Title: Video</div>
                <div className='mb-1 px-2'>Name: Jitendra</div>
                <div className='mb-1 px-2'>Description: This is Testimonial Video</div>
              </div>
              <div className='bg-white w-96 h-72  flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=9bkGcXjVsUo"><img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2'>Title: Video</div>
                <div className='mb-1 px-2'>Name: Jitendra</div>
                <div className='mb-1 px-2'>Description: This is Testimonial Video</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default video_testimonial 