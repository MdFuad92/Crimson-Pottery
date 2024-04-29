import React, { useEffect, useState } from 'react';
import { Bounce, Fade, Flip } from 'react-awesome-reveal';
import { FaStar } from 'react-icons/fa';
import {  Link, useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoriesSection = () => {
    const newItems  = useLoaderData()
     useEffect(() => {
        AOS.init();
      }, [])
      
     const [craft,setCraft] = useState([])
     const {_id,email,name,Customize,stock,processing,item_name ,photo, category ,price ,rating,description} = craft
      useEffect(()=>{
           fetch('http://localhost:5000/crafts')
           .then(res=>res.json())
           .then((data) => {
            console.log(data)
            setCraft(data)
        })
      })

    // "image": 
    // "item_name": "
    // "subcategory_name": 
    // "short_description": "
    // "price": 
    // "rating":
    // "processing_time
   

    return (
      <div className=' w-1/2 ' >
        {
            newItems.map(m=>
            <div key={newItems._id}>
                 
                  <div className="card p-3 w-96 mb-10 border ml-5 mt-10 rounded-xl   shadow-xl border-slate-200" data-aos="fade-up" data-aos-duration='1000'>
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
                <Link  ><button className='underline hover:text-amber-200'>View Details</button></Link>
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

     <div>
     {
            craft.map(c=>
                <div key={c._id}>
                    <h1>{description}</h1>
                </div>
            )
        }
     </div>
      </div>
    );
};

export default CategoriesSection;