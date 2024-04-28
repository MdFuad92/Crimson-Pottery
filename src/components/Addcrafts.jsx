import React, { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Addcrafts = () => {
    useEffect(() => {
        AOS.init();
      }, [])



     const {user} = useContext(AuthContext) 

      const handleAddcrafts = (e)=>{
         e.preventDefault()
         const form = e.target
         const item_name = form.item_name.value
         const photo = form.photo.value
         const category = form.subcategory_Name.value
         const price = form.price.value
         const rating = form.rating.value
         const Customize   = form.customization.value
         const stock = form.stock.value
         const processing    = form.processing.value
         const description = form.description.value
         const email = form.email.value
         const name = form.name.value       
         const newCraft = {email,name,Customize,stock,processing,item_name ,photo, category ,price ,rating,description}
         console.log(newCraft)

         fetch('http://localhost:5000/crafts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCraft)
            })
            .then(res=>res.json())
            .then((data) => {console.log(data)
              if(data.insertedId){
                Swal.fire({
                    title: "Congratulations!",
                    text: "Registration Successful",
                    icon: "success"
                  });
              }
            
            })
         

      }
    return (
      <div>
         
          <div className=' hero min-h-screen    bg-no-repeat opacity-90  md:bg-[length:1600px_900px] bg-[length:600px_600px]' style={{backgroundImage: 'url(https://i.ibb.co/d2nzKcx/chloe-bolton-R0qth-Xq3jec-unsplash.jpg'}}>
        
      
        
        <form onSubmit={handleAddcrafts} className="card-body " data-aos="fade-up"data-aos-duration='1000'>
        <h1 className='text-4xl font-extrabold text-center '>Add Your Favorite Item</h1>
           {/* form name and quantity*/} 
        <div className='md:flex items-center gap-8'>
        <div className="form-control w-1/2  ">
            <label className="label">
            <span className="label-text">Item URL</span>
            </label>
            <input  type="text" placeholder="item URL" name='photo' className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Item Name</span>
            </label>
            <input type="text" name='item_name' placeholder="Item Name" className="input input-bordered" required />
          
            </div>
           
        </div>
         {/* form supply and taste*/} 
        <div className='flex gap-8 items-center '>
        <div className="form-control w-1/2 ">
            <label className="label">
            <span className="label-text">Category</span>
            </label>
          
            <select className='input' placeholder='Category'  type="text" name="subcategory_Name" id="pottery-type">
                        <option value="Clay-made pottery">Clay-made pottery </option>
                        <option value="Stoneware"><span>Stoneware</span></option>
                        <option value="Porcelain"><span>Porcelain</span></option>
                        <option value="Terra Cotta"><span>Terra Cotta</span></option>
                        <option value="Ceramics & Architectural"><span>Ceramics & Architectural</span></option>
                        <option value="Home decor pottery"><span>Home decor pottery</span></option>
                        <option value="Earthenware"><span>Earthenware</span></option>
                        <option value="Majolica"><span>Majolica</span></option>
                        <option value="Raku"><span>Raku</span></option>
                        <option value="Wood-Fired Ceramics"><span>Wood-Fired Ceramics</span></option>
                   
                        
                    </select>
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Price</span>
            </label>
            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
          
            </div>
           
        </div>
            {/* form category and details*/} 
        <div className='flex items-center gap-8 '>
        <div className="form-control w-1/2 ">
            <label className="label">
            <span className="label-text">Rating</span>
            </label>
            <input  type="text" placeholder="Rating" name='rating'  className="input input-bordered w-full" required />
            </div>
            <div className="form-control ">
            <h1 className='font-bold'>Customization</h1>
           <label className="cursor-pointer label space-x-3">
        
           <span className="label-text ">Yes</span>
           <input type="radio" name='customization' value='yes' className="checkbox checkbox-accent" />
        
         </label>
           <label className="cursor-pointer label space-x-3">
        
           <span className="label-text ">No</span>
           <input type="radio" name='customization' value='no' className="checkbox checkbox-error" />
        
         </label>
         </div>       
           
        </div>
     
        <div className='flex items-center gap-8 '>
       
        <div className="form-control w-1/2 ">
        <label className="label">
            <span className="label-text">Processing Time</span>
            </label>
        <input  type="text" name='processing' placeholder="Processing Time" className="input input-bordered"  required />
          
            </div>
            <div className="form-control">
            <h1 className='font-bold'>Stock Status</h1>
            <label className="cursor-pointer label space-x-3 ">
            <span className="label-text">Available</span>
            
            <input  type="radio" name='stock' value=' Instock'  defaultChecked className="checkbox checkbox-accent" required  />
          
          
            </label>
            <label className="cursor-pointer label space-x-3 ">
            <span className="label-text">Not Available</span>
            
            <input  type="radio" name='stock' value='Out of Stock'  defaultChecked className="checkbox checkbox-error" required  />
          
          
            </label>
            </div>
           
        </div>

        <div className='flex items-center gap-8 '>
        <div className="form-control w-1/2 ">
            <label className="label">
            <span className="label-text font-bold">Email</span>
            </label>
            <input  type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Name</span>
            </label>
            <input type="name" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
          
          
            </div>
           
        </div>
        <div className='flex items-center gap-8 '>
        <div className="form-control w-full ">
            <label className="label">
            <span className="label-text font-bold">Description</span>
            </label>
            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
            </div>
      
           
        </div>
     
      
    
        <input type="submit" value='Add Your favorite design' className='btn btn-block hover:bg-neutral-700 bg-neutral-700 text-white border-neutral-700' />
            </form>
           
            
    
           
    
          
          </div>
      </div>
    );
};

export default Addcrafts;