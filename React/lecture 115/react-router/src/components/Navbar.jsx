import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex gap-5 bg-black p-4'>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li className='text-white list-none '>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/About"><li className='text-white list-none '>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Login"><li className='text-white list-none '>login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
