import React, { useEffect } from 'react';
import { Flip, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sub = ({i}) => {
    const {image,item_name,subcategory_name,description,} = i

    useEffect(() => {
        AOS.init();
      }, [])

    return (
      
       
            
     
           <div className=" card md:w-96 w-[300px] h-[400px] hover:text-white    bg-gradient-to-r from-stone-500 via-stone-400 to-stone-300 border " data-aos="fade-up" data-aos-duration='1000'>
       
        
       <div className=" p-5  hover:rounded-xl cursor-pointer ">
       <Link to={`/newcrafts/${subcategory_name}`}>   
       <img className='w-60 h-60 rounded-xl'   src={image} alt="" />
          <h2 className="card-title">Category: {subcategory_name} </h2>
          <p>{description}</p>
          
          
          </Link>
          
        </div>
       
      
      </div>
    
  
     
  
    );
};

export default Sub;