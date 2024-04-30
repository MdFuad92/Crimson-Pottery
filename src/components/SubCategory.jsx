import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const SubCategory = () => {
    const category = useLoaderData()
   

    return (
        <div className="  max-w-screen shadow-xl p-10 rounded-md  dark:bg-gray-50 dark:text-gray-900">
	<div className='grid grid-cols-3 gap-5  '>
    {
        category.map(c=>
            <div key={c._id}>
            <img src={c.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{c.item_name}</span>
                <h2 className="text-xl font-semibold tracking-wide">{c.subcategory_name}</h2>
            </div>
            <p className="dark:text-gray-800">{c.description}</p>
         <div className=' card-actions justify-between  flex  items-center'>
         <div className=' flex text-yellow-400  gap-1 items-center'>
                <FaStar></FaStar>
                <span>{c.rating}</span>
            </div>
            <div>
                <span>Price: {c.price}$</span>
            </div>
    
            <div>
               <NavLink to={`/items/${c._id}`}> <button className='underline hover:text-amber-100  '>View Details</button></NavLink>
            </div>
            </div>
            </div>
        )
    }
    </div>
</div>
    );
};

export default SubCategory;