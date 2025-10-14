import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <div className='p-3 max-w-md mx-auto '>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' >
        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg bg-white outline-none  border-none '/>
        <input type="email" placeholder='Email' id='email' className='border p-3 rounded-lg bg-white border-none outline-none  ' />
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg bg-white border-none outline-none ' />
        <button  type='submit' className='bg-slate-700 uppercase text-white cursor-pointer p-3 rounded-lg font-semibold hover:opacity-95 disabled:opacity-80'>
          Sign up
        </button>
      </form>
      <div className='flex gap-2 mt-5 '>
       <p>Have an account?</p>
       <Link to='/sign-in'>
       <span className='text-blue-700'>Sign In</span>
       </Link>

      </div>

    </div>
    </>
  )
}

export default SignUp