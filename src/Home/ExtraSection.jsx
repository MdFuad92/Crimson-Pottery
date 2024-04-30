import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExtraSection = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='flex justify-center ' data-aos="fade-right" data-aos-duration='1000'>
           <div className='md:w-[1300px]  '>
           <div className='mb-10 md:ml-0 ml-5  md:text-lg text-sm items-center justify-center'>
                <h1 className='text-5xl font-thin uppercase mb-5' >about us</h1>
                <p>At <span className='font-bold'>Crimson Pottery</span>, we are passionate about the <br /> artistry and craftsmanship of pottery. With a deep appreciation for tradition and a keen eye for contemporary design, we curate a collection of handcrafted pottery pieces that reflect the beauty of human creativity.Our journey began with a simple love for clay and a desire to share the timeless allure of pottery with the world.From rustic earthenware to delicate porcelain, each piece in our collection tells a story of dedication, skill, and imagination.Driven by a commitment to quality and authenticity,we collaborate with skilled artisans and pottery enthusiasts from around the globe, ensuring that every item you find here is a testament to the rich heritage of pottery-making.Whether youre seeking a statement piece for your home decor, a thoughtful gift for a loved one, or simply a way to indulge in the tactile pleasure of handmade pottery, we invite you to explore our collection and discover the magic of pottery at Crimson Pottery.

</p>
            </div>
            <div className=' md:ml-0 ml-5 flex justify-center md:w-[1300px] w-[330px]'>
                <img className='  mb-10 rounded-xl' src="https://i.ibb.co/4Jt4VtS/quino-al-v-Bxl-L1xp-Sdc-unsplash.jpg" alt="" />
            </div>
           </div>
            
        </div>
    );
};

export default ExtraSection;