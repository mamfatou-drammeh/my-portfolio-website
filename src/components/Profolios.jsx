// App.js
import React from 'react';
import ProfolioCard from '../profolio/ProfolioCard';
import image1 from "../assets/images/sts.png"
import image2 from "../assets/images/bge.png"
import image3 from "../assets/images/gp.png"
import image4 from "../assets/images/becl.png"
import  Container  from '../container/Container';
import serviceBg from '../assets/images/service-bg.jpg'
const Profolios = () => {
  return (
    <div className= {` py-20  bg-black/90 bg-blend-overlay `}
    style={{ backgroundSize:"cover",  backgroundImage: `url(${serviceBg}  )`}} id='profolios'>
      <Container>
      <h4 className="uppercase text-[#279EFF] font-bold mb-5 text-2xl pb-6">
            Profolio
          </h4>
     
      <div className="grid grid-cols-2 gap-6 ">
       <ProfolioCard 
       
       image={image1}
       />
 <ProfolioCard 
       
       image={image2}
       />
 <ProfolioCard 
       
       image={image3}
       />
 <ProfolioCard 
       
       image={image4}
       />

       
       
      </div>
      </Container>
    </div>
  );
};

export default Profolios;
