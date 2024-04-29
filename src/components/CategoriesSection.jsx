import React, { useEffect, useState } from 'react';
import { Bounce, Fade, Flip } from 'react-awesome-reveal';
import { FaStar } from 'react-icons/fa';
import {  Link, useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LastCategories from './LastCategories';

const CategoriesSection = () => {
    const newItems  = useLoaderData()

    const loader = useLoaderData()
    const {_id,email,name,Customize,stock,processing,item_name ,photo, category ,price ,rating,description} = loader
 
     useEffect(() => {
        AOS.init();
      }, [])
      
    
      const [craft,setCraft] = useState([])
      useEffect(()=>{
           fetch('http://localhost:5000/crafts/')
           .then(res=>res.json())
           .then((data) => {
            console.log(data)
            setCraft(data)
          
        })
      },[])
     

    // "image": 
    // "item_name": "
    // "subcategory_name": 
    // "short_description": "
    // "price": 
    // "rating":
    // "processing_time
   

    return (
     {
        newItems.map(m => <LastCategories key={m._id} m={m}></LastCategories> )
     } 
    );
};

export default CategoriesSection;