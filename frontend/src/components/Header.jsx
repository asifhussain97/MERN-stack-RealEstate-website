import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#1A1A1A' }} className='shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-white'>Estate</span>
                    <span style={{ color: '#703BF7' }}>Empire</span>
                </h1>
            </Link>
            
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-white hover:underline'>Home</li>
                </Link>

                <Link to='/about'>
                    <li className='hidden sm:inline text-white hover:underline'>About</li>
                </Link>
                
                <Link to='/profile'>
                        <li className='hidden sm:inline text-white hover:underline'> Properties</li>
                </Link>            
            </ul>

            <form className=' bg-slate-100 rounded-full px-2 py-1 flex items-center'>
                <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-400' />
            </form>

            <ul className='flex gap-4'>
                <Link to='/sign-in'>
                        {/* {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                        ) : ( */}
                            <li className=' text-white hover:underline'>Sign in</li>
                        {/* )} */}
                </Link>    
            </ul>

        </div>
        
    </header>
  )
}
