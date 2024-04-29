import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Crafteditems from '../components/Crafteditems';
import Highlight from './Highlight';
import ExtraSection from './ExtraSection';

const Home = () => {
    const craftsLoader = useLoaderData() 
   
    const [dataLength,setDataLength] = useState(6)
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
          <ExtraSection></ExtraSection>

         
        </div>
    );
};

export default Home;