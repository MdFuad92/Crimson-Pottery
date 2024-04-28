import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const MyCraftedItems = () => {
    // const {_id,email,name,Customize,stock,processing,item_name ,photo, category ,price ,rating,description} = crafts
    const {user} = useContext(AuthContext)
    console.log(user)
    const [mylist,setMylist] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/crafts/${user?.email}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setMylist(data)
        })
    },[user])
    return (
        <div className='grid grid-cols-4 gap-6 mt-7 mb-7 '>
            {
        mylist.map((m)=>
        <div key={m._id} className=" border-slate-600 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
<div className="flex space-x-4">
   
    <div className="flex flex-col space-y-1">
        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Customisation: {m.Customize}</a>
        <span className="btn btn-xs  ">{m.stock}</span>
    </div>
</div>
<div>
    <img src={m.photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
    <h2 className="mb-1 text-xl font-semibold">{m.item_name}</h2>
    <p className="text-sm dark:text-gray-600">{m.description}</p>
</div>
<div className="flex flex-wrap  justify-between">
    <div className="space-x-2 flex gap-5 items-center">
        <button aria-label="Share this post" type="button" className="btn btn-xs btn-primary text-center">
           update
        </button>
        <button aria-label="Bookmark this post" type="button" className="btn btn-xs text-error text-center ">
          delete
        </button>
    </div>
    <div className="flex space-x-2 text-sm dark:text-gray-600">
        <button type="button" className="flex text-yellow-400 items-center p-1 space-x-1.5">
        <FaStar></FaStar>
            <span>{m.rating}</span>
        </button>
        <button type="button" className="flex items-center p-1 space-x-1.5">
          
            <span>{m.price}$</span>
        </button>
    </div>
</div>
</div>
        
                 
          )
            }
        </div>
       
    );
};

export default MyCraftedItems;