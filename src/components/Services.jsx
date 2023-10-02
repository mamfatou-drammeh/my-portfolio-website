import React from 'react'
import ServiceCard from '../service/ServiceCard'
import Container from '../container/Container'
import serviceBg from '../assets/images/service-bg.jpg'

function Services() {
  return (
    <div className= {` h-screen  bg-black/90 bg-blend-overlay flex items-center`}
    style={{ backgroundSize:"cover",  backgroundImage: `url(${serviceBg}  )`}} id='services'>
      <Container>
      <div>
        <h4 className='font-bold uppercase mb-8 text-[#279EFF] text-2xl'>Services</h4>
        {/* <p className='text-[#ccc] pb-5 font-bold'>The top quality services I offer</p> */}
      </div>
      <div className="grid grid-cols-2 gap-6 ">
      <ServiceCard
        title="Web Design"
        description="Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites."
       
      />
      <ServiceCard
        title="Mobile App Development"
        description="Creating compelling graphics for digital and print media. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites."
        
      />
       <ServiceCard
        title="Content Management"
        description="Creating compelling graphics for digital and print media. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites."
        
      />
       <ServiceCard
        title="Graphic Design"
        description="Creating compelling graphics for digital and print media. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. "
        
      />
    
    </div>
      </Container>
     
    
  </div>
  )
}

export default Services