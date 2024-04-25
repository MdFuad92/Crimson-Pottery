import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import potter from '../../src/assets/10175562.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    const link = <>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/add'>Add Craft Item</NavLink></li>
        <li><NavLink to='/list'>My art and craft list</NavLink></li>
       
    </>
    return (
      <div className=' min-h-screen bg-no-repeat opacity-90  md:bg-[length:1600px_900px] bg-[length:600px_600px]' style={{backgroundImage: 'url(https://i.ibb.co/d2nzKcx/chloe-bolton-R0qth-Xq3jec-unsplash.jpg'}}>

<div className="navbar" >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-poppins font-extrabold "><img className='w-14 rounded-md  '  src={potter} alt="" /> <span className='font-semibold'>Crimson</span> Pottery</a>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1  text-white font-poppins font-medium text-base">
      
           {link}
          
          </ul>
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
        <div className="navbar-end space-x-3">
       <Link to='login'>   <button className="btn">Login</button></Link>
          <Link to='/register'><button className="btn bg-neutral-700 text-white">Register</button></Link>
        </div>
      </div>
      <div className='text-center mt-40'  data-aos='fade-up' data-aos-duration='1000'>
        <h2 className='text-6xl'> Every touch has its <br /> own feelings </h2>
        <br />
        <h4 className='text-3xl '>Welcome this season with 50% off</h4>
        <div className='mt-5 space-x-3'>
        <button className="btn btn-outline bg-neutral-700 border-neutral-700 text-white">Shop Now</button>
        <button className="btn btn-outline hover:bg-neutral-700">Add</button>
        </div>
      </div>
      </div>
     
    );
};

export default Navbar;