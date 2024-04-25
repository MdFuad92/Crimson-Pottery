import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
     const {createEmail} = useContext(AuthContext)
    const handleRegister = (e)=>{
          e.preventDefault()
          const form = e.target
          const name = form.name.value
          const email = form.email.value
          const password = form.password.value
          console.log(name,email,password)

          createEmail(name,email,password)
          .then((result)=>{
            console.log(result)
          })
          .catch((error)=>{
            console.error(error)
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
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-neutral-700 border-neutral-700 bg-neutral-700 text-white">Register</button>
              </div>
              <div>
                <p className='text-center mt-3 text-sm'>Already have an account <Link to='/login'><span className='text-primary font-bold text-lg '>Login</span></Link> Now</p>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;