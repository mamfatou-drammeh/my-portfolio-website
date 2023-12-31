import React from 'react'
import image from "../assets/images/image.jpg"
import Container from '../container/Container'

function AboutMe() {
  return (
    <div className=" bg-[#101010] mx-auto px-4 py-20 items-center " id='about-me'>
      
    <Container>
    
        <div className='grid grid-cols-2 gap-5' >
        <div className="">
          <h4 className="uppercase text-[#279EFF] font-bold mb-5 text-2xl">
            about me
          </h4>
         
          <p className="pb-7 text-lg text-[#ccc]">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reprehenderit minima neque sint, iusto laboriosam fugit excepturi saepe, ratione dicta harum qui porro vero? Cupiditate omnis amet molestiae asperiores provident!
          </p>
          <p className="pb-11 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste sint aliquam enim nemo dignissimos minima quidem a dolores soluta? Ratione, quae consequuntur ipsa maxime delectus et culpa aperiam nulla.
          </p>
          <p className="text-gray-600">
            
          </p>
        </div>

         <div>
         <div className=' border-[2px] border-[#23415b] grid grid-cols-2 h-[300px] gap-5 p-5 rounded-xl'>
            <div className='grid grid-cols-2 relative bg-[#fff] rounded-xl overflow-hidden'>
              <div className=''></div>
              <div className='bg-[#279EFF]'></div>
              <div className=''></div>
              <div className='bg-[#279EFF]'></div>
              <div className='  bg-[#333] flex flex-col justify-center items-center rounded-xl absolute top-[50%] left-[50%] w-[95%] h-[90%] -translate-x-1/2 -translate-y-1/2'>
              <p className='text-[#ccc] text-4xl font-bold'>50%</p>
              <p className=' text-[#ccc] text-1xl font-semibold'>Node Js</p>
            </div>
            </div>
            <div className='grid grid-cols-2 relative bg-[#fff] rounded-xl overflow-hidden'>
              <div className=''></div>
              <div className='bg-[#279EFF]'></div>
              <div className='bg-[#279EFF]'></div>
              <div className='bg-[#279EFF]'></div>
              <div className='  bg-[#333] flex flex-col justify-center items-center rounded-xl absolute top-[50%] left-[50%] w-[95%] h-[90%] -translate-x-1/2 -translate-y-1/2'>
              <p className='text-[#ccc] text-4xl font-bold'>76%</p>
              <p className=' text-[#ccc] text-1xl font-semibold'>Tailwind CSS</p>
            </div>
            </div>
            <div className='grid grid-cols-2 relative bg-[#fff] rounded-xl overflow-hidden'>
              <div className=''></div>
              <div className='bg-[#279EFF]'></div>
              <div className=''></div>
              <div className=''></div>
              <div className='  bg-[#333] flex flex-col justify-center items-center rounded-xl absolute top-[50%] left-[50%] w-[95%] h-[90%] -translate-x-1/2 -translate-y-1/2'>
              <p className='text-[#ccc] text-4xl font-bold'>25%</p>
              <p className=' text-[#ccc] text-1xl font-semibold'>Laravel</p>
            </div>
            </div>
            <div className='grid grid-cols-2 relative bg-[#fff] rounded-xl overflow-hidden'>
              <div className=''></div>
              <div className='bg-[#279EFF]'></div>
              <div className='bg-[#279EFF]'></div>
              <div className='bg-[#279EFF]'></div>
              <div className='  bg-[#333] flex flex-col justify-center items-center rounded-xl absolute top-[50%] left-[50%] w-[95%] h-[90%] -translate-x-1/2 -translate-y-1/2'>
              <p className='text-[#ccc] text-4xl font-bold'>78%</p>
              <p className=' text-[#ccc] text-1xl font-semibold'>React Js</p>
            </div>
            </div>
          </div>
         </div>
        </div>
      
      
    </Container>
  </div>
  )
}

export default AboutMe