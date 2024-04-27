import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Crafteditems = ({crafts}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    
    const {_id,email,name,Customize,stock,processing,item_name ,photo, category ,price ,rating,description} = crafts
    return (
        <div className="w-72 p-6 rounded-md shadow-md bg-stone-400  dark:text-gray-900" data-aos="fade-up"data-aos-duration='1000'>
        <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Name: {item_name}</span>
            <h2 className="text-xl font-semibold tracking-wide">Category: {category}</h2>
        </div>
        <p className="dark:text-gray-800">{description}</p>
        <div className='space-x-3'>
             <Link to={`/craftDetails/${_id}`} >           <button className='btn text-white mt-3 border-neutral-700 bg-neutral-700'>View Details</button></Link>
            <button className=' text-slate-500 mt-3 bg-gray-300 rounded-lg p-2'>{stock}</button>
        </div>
    </div>
    );
};

export default Crafteditems;