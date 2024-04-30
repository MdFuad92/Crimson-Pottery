import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Crafteditems from '../components/Crafteditems';
import Highlight from './Highlight';
import ExtraSection from './ExtraSection';

import Sub from '../Typewriter/Sub/Sub';

const Home = () => {
    const craftsLoader = useLoaderData() 
    const [item,setItem] = useState([])

    useEffect(()=>{
      fetch('http://localhost:5000/newcrafts')
      .then(res=>res.json())
      .then(data=>
        setItem(data)
      )
    },[])
  
   
    const [dataLength,setDataLength] = useState(6)
    const [newlength,setLength] = useState(10)

    return (
        <div className='space-y-36'>
          <Banner></Banner>
          <Highlight></Highlight>
          <div >
          <h1 className='text-5xl text-center'>Our Products</h1>
          </div>
          <div className='grid grid-cols-4 gap-6 ml-6 mt-7 mb-7  '>
             
       
            {   
               craftsLoader.slice(0,dataLength).map(crafts=><Crafteditems key={crafts._id} crafts={crafts}></Crafteditems>)
            }
          </div>
          <div className='text-center mb-7' >
          <div className={dataLength === craftsLoader.length ? 'hidden' : '' }>
            <button onClick={()=>setDataLength(craftsLoader.length)} className=' btn bg-gradient-to-r from-neutral-400 to-slate-200 hover:from-neutral-500 hover:to-gray-500'>Show All Ceramics & Pottery</button>
          </div>
          </div>
          <div>
            <h1 className='text-5xl text-center'>Choose by Category</h1>
          </div>
          <div className='grid grid-cols-3 gap-5'>
         {
          item.slice(0,newlength).map(i=> <Sub key={i._id}  i={i}></Sub>)
         }
          </div>
          <ExtraSection></ExtraSection>


         
        </div>
    );
};

export default Home;