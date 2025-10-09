import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
       <div className='flex justify-around items-center  p-3'>
        <Link to='/'>
           <h1 className='font-bold text-sm sm:text-xl  flex flex-wrap'>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-2 sm:p-2 rounded-lg flex items-center w-48 sm:64 justify-between' >
            <input type="text" placeholder='Search'  className='bg-transparent focus:outline-none text-sm'/>
            <FaSearch  className='sm:inline text-slate-500 '/>
        </form>
          <ul className='flex gap-3'>
           <Link to='/'>
            <li className='hidden sm:inline hover:underline'>Home</li>
           </Link>
           <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>About</li>
           </Link>
            <Link to='/sign-in'>
            <li className='hover:underline'>Sign In</li>
            </Link>
          </ul>
       </div>
    </header>
  )
}

export default Header