import React, { useEffect } from 'react';



import { useTypewriter,Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      const [typeEffect] = useTypewriter({

        words:['Every Touch Has Its Own Feelings'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
      })
    
    return (
  
      

      <div className="hero md:min-h-screen min-h-screen  mx-auto  bg-no-repeat opacity-90  md:bg-[length:1600px_900px]  " style={{backgroundImage: 'url(https://i.ibb.co/d2nzKcx/chloe-bolton-R0qth-Xq3jec-unsplash.jpg'}}>
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-start font-normal " >
        <div className="max-w-2xl mx-auto space-y-5" data-aos="fade-up" data-aos-duration='1000' >
        <div className='flex items-center gap-5' >  
      
            <h1 className='md:text-5xl text-2xl'  >{typeEffect}</h1>
           
            
        </div >
          
        
          <p className="mb-5 text-lg font-semibold" >Welcome this season with 50% off <br />
        
         </p>
          <div className='mt-5 space-x-3'>
        <Link to={'/products'}><button className="btn btn-outline bg-neutral-700 border-neutral-700 text-white">Shop Now</button></Link>
      
        </div>
        
        </div>

        
      </div>
      
    </div>
    );
};

export default Banner;