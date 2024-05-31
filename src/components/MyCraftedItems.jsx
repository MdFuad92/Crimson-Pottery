import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const MyCraftedItems = () => {
    // const {_id,email,name,Customize,stock,processing,item_name ,photo, category ,price ,rating,description} = crafts

    
    useEffect(() => {
        AOS.init();
      }, [])

    const {user} = useContext(AuthContext)
    console.log(user)
    const [mylist,setMylist] = useState([])
    const [displayCustom,setCustom] = useState([])

  

    const handleFilter = (filter)=>{

        if(filter === 'all'){
            setCustom(mylist)
        }
        if(filter === 'yes'){
            const customize = mylist.filter(m=> m.Customize === 'yes')
            setCustom(customize)
        }

        else if(filter === 'no'){
            const customizeNo = mylist.filter(m=>m.Customize === 'no')
            setCustom(customizeNo)
        }
    }
    useEffect(()=>{
        fetch(`https://assignment-ten-server-steel.vercel.app/crafts/${user?.email}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setMylist(data)
            setCustom(data)
        })
    },[user])

    const handleDelete = (_id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-ten-server-steel.vercel.app/crafts/id/${_id}`,{
                    method:'DELETE',
                 })
                 .then(res=>res.json())
                 .then((data)=>{
                    console.log(data)
        
                    if(data.deletedCount > 0 ){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining = mylist.filter(list=> list._id !== _id)
                          setMylist(remaining)
                    }
                   
                 })
              
            }
          });
   
    }


    return (
        <div className=''>
                 <div className="text-center">
            <details className="dropdown  ">
              <summary className="mt-5 btn btn-neutral  text-white">Customizable</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
             
            <li onClick={()=>handleFilter('all')}  ><a>All</a></li>
            <li onClick={()=>handleFilter('yes')}  ><a>Yes</a></li>
            <li onClick={()=>handleFilter('no')}  ><a>No</a></li>
            
          
              </ul>
              </details>
            </div>

             <div className='md:grid grid-cols-4 flex flex-col md:ml-60 p-3  gap-6 mt-7 mb-7 ' data-aos="fade-up" data-aos-duration='1000'>
            {
       displayCustom.map((m)=>
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
        <Link to={`/update/${m._id}`}>
        <button aria-label="Share this post" type="button" className="btn btn-xs btn-primary text-center">
           update
        </button></Link>
        <button onClick={()=>handleDelete(m._id)} aria-label="Bookmark this post" type="button" className="btn btn-xs text-error text-center ">
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
        </div>
       
       
    );
};

export default MyCraftedItems;