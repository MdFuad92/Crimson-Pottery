import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
    const {login,google,github} = useContext(AuthContext)
    const loc = useLocation()
    const navigate = useNavigate()
    
    useEffect(() => {
      AOS.init();
    }, [])
    const [pass,setPass] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault()
   
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password)

        login(email,password)
        .then((result) =>{
         console.log(result.user)
          
         Swal.fire({
          title: "Congratulations!",
          text: "Login Successful",
          icon: "success"
        });
        navigate(loc?.state?loc.state:'/' )
        })
        .catch((error)=>{
          console.error(error)
          Swal.fire({
            title: "Sorry!",
            text: "Wrong Password or Email!",
            icon: "error"
          });
        
        })

    }

    const handleGoogle = ()=>{
      google()
      .then((result)=>{
        console.log(result.user)
        Swal.fire({
          title: "Congratulations!",
          text: "Login Successful",
          icon: "success"
        });
          
         
     
        })
        .catch((error)=>{
          console.error(error)
          Swal.fire({
            title: "Sorry!",
            text: "Wrong Password or Email!",
            icon: "error"
          });
        
          
          
          
        })
      
    }

    const handleGithub = () =>{
      github()
      .then((result)=>{
       console.log(result)
       Swal.fire({
        title: "Congratulations!",
        text: "Login Successful",
        icon: "success"
      });
    
      })
      .catch((error)=>{
        console.error(error)
        Swal.fire({
          title: "Sorry!",
          text: "Wrong Password or Email!",
          icon: "error"
        });
      
   
      })
 }
    return (
        <div className="hero min-h-screen  " style={{backgroundImage: 'url(https://i.ibb.co/d2nzKcx/chloe-bolton-R0qth-Xq3jec-unsplash.jpg'}}>
        <div className="hero-content flex-col lg:flex-row-reverse" data-aos="fade-up" data-aos-duration='1000'>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent font-medium">
            <form onSubmit={handleLogin} className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className='relative'>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
             
                <input type={pass?'text': "password"} placeholder="password" name='password' className="input input-bordered" required />
                <span className='absolute md:left-72 left-60 top-[53px]' onClick={()=> setPass(!pass) } >{
                 pass?<FaEye className='text-lg'></FaEye>:<FaEyeSlash className='text-lg' />
               
                }  </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             </div>
             
                <button className="btn hover:bg-neutral-700 border-neutral-700 bg-neutral-700 text-white">Login</button>
                <button onClick={handleGoogle} className='btn  hover:bg-neutral-700 border-neutral-700 bg-neutral-700 text-white'><FaGoogle />Google</button>
                <button onClick={handleGithub} className='btn  hover:bg-neutral-700 border-neutral-700 bg-neutral-700 text-white'><FaGithub />Github</button>
              
              <div>
                <p className='text-center mt-3 text-sm'>Already have an account <Link to='/register'><span className='text-primary font-bold text-lg '>Register</span></Link> Now</p>
                </div>
                <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>

<ToastContainer />
               
            </form>
 
          </div>
        </div>
      </div>
    );
};

export default Login;