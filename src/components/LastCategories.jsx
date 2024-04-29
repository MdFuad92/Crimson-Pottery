import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LastCategories = ({m}) => {
    const {_id,image ,item_name,subcategory_name,description,rating,price} = m
   
  
  
   
               
  

    return (
     <div>
        <div className=' w-1/2 ' >
       
            
            <div>
                 
                  <div className="card p-3 w-96 mb-10 border ml-5 mt-10 rounded-xl   shadow-xl border-slate-200" data-aos="fade-up" data-aos-duration='1000'>
        <figure><img className='p-6 w-96 rounded-xl' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {item_name}
            <div className="badge badge-success">NEW</div>
          </h2>
       <div className='  text-slate-900 rounded-lg'>
       <h3 className='text-gray-300 ' >{subcategory_name}</h3>
       </div>
          <p>{description}</p>
          <div className="card-actions justify-end space-x-2">
            <div>
                <Link to ={`/craftDetails/${_id}`} ><button className='underline hover:text-amber-200'>View Details</button></Link>
            </div>
            <div className='flex items-center text-yellow-400'>
                <FaStar></FaStar>
            <div className="">{rating}</div> 
            </div>
            <div className="text-green-400 ">{price}$</div>
          </div>
        </div>
      </div>
                
            </div>
          
      

     <div>
    
     </div>
      </div>
     </div>
    );
};

export default LastCategories;