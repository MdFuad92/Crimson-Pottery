import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Crafteditems from '../components/Crafteditems';

const Home = () => {
    const craftsLoader = useLoaderData() 
   
    const [dataLength,setDataLength] = useState(6)
    return (
        <div>
          <Banner></Banner>
         
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
        </div>
    );
};

export default Home;