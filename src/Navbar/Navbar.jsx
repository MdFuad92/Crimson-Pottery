import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import potter from '../../src/assets/10175562.jpg'

import { AuthContext } from '../AuthProvider/AuthProvider';
import { CiUser } from 'react-icons/ci';
import ThemeController from '../components/ThemeController';


const Navbar = () => {
 

  const {logOut} = useContext(AuthContext)

  const {user} = useContext(AuthContext)
 
  const handlelogOut = ()=>{
  logOut()
  .then()
  .catch()
 }
    const link = <>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/add'>Add Items</NavLink></li>
        <li><NavLink to='/mylist'>My Cart</NavLink></li>
       
    </>

    const [theme,setTheme] = useState('light')
    const handleToggle = (e)=>{
      if(e.target.checked){
        setTheme('dracula')
      }
      else{
        setTheme('light')
      }
    }

    useEffect(()=>{
      localStorage.setItem('theme',theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme',localTheme) 
    },[theme])
    console.log(theme)
    return (
     

<div className="navbar dark:bg-gradient-1 bg-gradient-to-r from-stone-500 via-stone-400 to-stone-300  " >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-poppins font-extrabold "><img className='w-14 rounded-md  '  src={potter} alt="" /> <span className='font-semibold'>Crimson</span> Pottery</a>
        </div>
        <div className="navbar-center hidden lg:flex   ">
          <ul className="menu menu-horizontal px-1 space-x-2  text-white font-poppins font-medium text-base">
      
           {link}
          
          </ul>
        </div>
       
        <div className="navbar-end space-x-3">
          {/* theme controller */}
    <ThemeController></ThemeController>
       {user ?
       
       <div className="dropdown dropdown-end">
       <div tabIndex={0} role="button" className="btn  btn-circle avatar  tooltip tooltip-neutral  tooltip-left" data-tip={user.displayName}>
         <div className="w-12 rounded-full">
           <img alt="Tailwind CSS Navbar component" src={user.photoURL || <CiUser /> } />
         </div>
       </div>
       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
       <li className='hover:bg-neutral hover:text-white rounded-lg '><a className='text-sm'><span className='text-lg'>Hi,</span>{user.displayName}!</a></li>
         <li>
           <a className="justify-between">
             Profile
             <span className="badge">New</span>
           </a>
         </li>
         <li><a>Settings</a></li>
         <button onClick={handlelogOut}><a>Logout</a></button>
       </ul>
     </div>:
     <div className='space-x-3'>
      
         <Link to='login'>   <button className="btn">Login</button></Link>
           <Link to='/register'><button className="btn bg-neutral-700 text-white">Register</button></Link>
     </div>
      
      }
      
        </div>
      </div>
   
     
     
    );
};

export default Navbar;