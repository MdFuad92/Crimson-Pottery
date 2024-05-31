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
      fetch('https://assignment-ten-server-steel.vercel.app/newcrafts')
      .then(res=>res.json())
      .then(data=>
        setItem(data)
      )
    },[])
  
   
    const [dataLength,setDataLength] = useState(6)
    const [newlength,setLength] = useState(10)

    return (
        <div className='md:space-y-36 space-y-20'>
          <Banner></Banner>
          <Highlight></Highlight>
          <div >
          <h1 className='text-5xl text-center'>Our Products</h1>
          </div>
          <div className='grid   md:grid-cols-4 mx-10 grid-cols-1 gap-6 md:ml-6 mt-7 mb-7  '>
             
       
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
            <h1 className='md:text-5xl text-3xl text-center'>Choose by Category</h1>
          </div>
          <div className='md:grid  grid-cols-3 flex flex-col  md:ml-6 ml-10 gap-5'>
         {
          item.slice(0,newlength).map(i=> <Sub key={i._id}  i={i}></Sub>)
         }
          </div>
          <ExtraSection></ExtraSection>


         
        </div>
    );
};

export default Home;