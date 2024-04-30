import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import potter from '../../src/assets/10175562.jpg'

import { AuthContext } from '../AuthProvider/AuthProvider';
import { CiUser } from 'react-icons/ci';


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
        <li><NavLink to='/mylist'>My Items</NavLink></li>
       
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
     

<div className="navbar   bg-gradient-to-r from-stone-500 via-stone-400 to-stone-300 dracula:bg-slate-900 " >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
            </ul>
          </div>
          <a className=" flex  items-center md:text-3xl text-xs font-poppins font-extrabold"><img className='md:w-14 w-7 rounded-md' src={potter} alt="" /> <span className='font-semibold ml-3'>Crimson Pottery </span> </a>
        </div>
        <div className="navbar-center hidden lg:flex   ">
          <ul className="menu menu-horizontal px-1 space-x-2  text-white font-poppins font-medium text-base">
      
           {link}
          
          </ul>
        </div>
       
        <div className="navbar-end space-x-3">
          {/* theme controller */}
        <label className=" cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handleToggle} className=" toggle  theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
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
     <div className='flex space-x-3'>
      
         <Link to='login'>   <button className="md:btn btn btn-xs">Login</button></Link>
           <Link to='/register'><button className="md:btn btn btn-xs bg-neutral-700 text-white">Register</button></Link>
     </div>
      
      }
      
        </div>
      </div>
   
     
     
    );
};

export default Navbar;