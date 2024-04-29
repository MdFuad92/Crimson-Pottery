import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Allcrafteditems = () => {
    const craftLoader = useLoaderData()
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="overflow-x-auto"  data-aos="fade-up"data-aos-duration='1000'>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
       
        <th>Item-Name</th>
        <th>Item-Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        craftLoader.map(c=>
            <tr key={c._id}>
            <th>
              
            </th>
            <td>
              <div className="flex items-center gap-3">
              {c.item_name}
          
              </div>
            </td>
            <td>
            {c.category}
            <br/>
              <span className="badge badge-ghost badge-sm">{c.stock}</span>
          
             
            </td>
          
            <td>
              <button className="btn btn-ghost btn-xs text-green-500">{c.price} $</button>
             

            </td>
            <td>
              <button className="btn btn-ghost btn-xs text-yellow-400">{c.rating} <FaStar></FaStar></button>

            </td>
           
            <td>
             <Link to={`/craftDetails/${c._id}`}> <button className="btn  btn-xs ">View Details</button></Link>

            </td>
          </tr>
        )
     }
      {/* row 2 */}
     
      {/* row 3 */}
      
      {/* row 4 */}
   
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
    );
};

export default Allcrafteditems;