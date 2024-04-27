import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
     const {createEmail,update} = useContext(AuthContext)
     const [pass,setPass] = useState(false)
    const handleRegister = (e)=>{
          e.preventDefault()
          const form = e.target
          const name = form.name.value
          const email = form.email.value
          const password = form.password.value
          const photo = form.photo.value
          console.log(name,email,password,photo)

          if(password.length < 6){
            toast.error('Password must be at least 6 characters')
             return
           }
           else if(!/[A-Z]/.test(password)){
              toast.error('Password must have atleast one Uppercasecharacter')
              return
           }
           else if(!/[a-z]/.test(password)){
             toast.error('Password must have atleast one Lowercasecharacter')
             return
           }

          createEmail(email,password,name,photo)
          .then((result)=>{
            console.log(result)
            const user = {email,name}
            update(name,photo)
            .then((result)=>{
            console.log(result)
        
           
             
            }
           )
            .catch()
            Swal.fire({
              title: "Congratulations!",
              text: "Registration Successful",
              icon: "success"
            });

              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                 'content-type':'application/json'
                },
                body: JSON.stringify(user)
  
              })
              .then(res=>res.json())
              .then((data)=>{
                console.log(data)
              })

        
          })
          .catch((error)=>{
            console.error(error)
            Swal.fire({
              title: "Sorry!",
              text: "Already Registered!",
              icon: "error"
            });
          })
    }
    return (
        <div className="hero min-h-screen  " style={{backgroundImage: 'url(https://i.ibb.co/d2nzKcx/chloe-bolton-R0qth-Xq3jec-unsplash.jpg'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent font-medium">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="photo" placeholder="photo" name='photo' className="input input-bordered" required />
             
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
              <div className="form-control mt-6">
                <button className="btn hover:bg-neutral-700 border-neutral-700  bg-neutral-700 text-white">Register</button>
              </div>
              <div>
                <p className='text-center mt-3 text-sm'>Already have an account <Link to='/login'><span className='text-primary font-bold text-lg '>Login</span></Link> Now</p>
                </div>
                

            </form>
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
                  {/* Same as */}
                  <ToastContainer />
          </div>
        </div>
      </div>
    );
};

export default Register;