import React, { useEffect } from 'react';
import { Bounce, Fade, Flip } from 'react-awesome-reveal';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoriesSection = () => {
    const newItems  = useLoaderData()
     useEffect(() => {
        AOS.init();
      }, [])

    // "image": 
    // "item_name": "
    // "subcategory_name": 
    // "short_description": "
    // "price": 
    // "rating":
    // "processing_time
   

    return (
      <div className=' grid grid-cols-3 hero min-h-screen ' style={{backgroundImage: 'url(https://i.ibb.co/d2nzKcx/chloe-bolton-R0qth-Xq3jec-unsplash.jpg'}}>
        {
            newItems.map(m=>
            <div key={newItems._id}>
                 
                  <div className="card p-3 w-96 rounded-xl   shadow-xl border-slate-200" data-aos="fade-up" data-aos-duration='1000'>
        <figure><img className='p-6 w-96 rounded-xl' src={m.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {m.item_name}
            <div className="badge badge-success">NEW</div>
          </h2>
       <div className='w-36 p-1 bg-slate-500 rounded-lg'>
       <h3 className='text-gray-300 ' >{m.subcategory_name}</h3>
       </div>
          <p>{m.description}</p>
          <div className="card-actions justify-end space-x-2">
            <div>
                
            </div>
            <div className='flex items-center text-yellow-400'>
                <FaStar></FaStar>
            <div className="">{m.rating}</div> 
            </div>
            <div className="text-green-400 ">{m.price}$</div>
          </div>
        </div>
      </div>
                
            </div>
            )
        }
      </div>
    );
};

export default CategoriesSection;