import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
   <div className='navbar'>
    <ul>
        <NavLink className={({isActive})=>isActive?"active-link link":"link"}  to= '/'>Home</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link link":"link"}   to='/about'>About</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link link":"link"}  to='/contact'>Conatact</NavLink>
        <NavLink className={({isActive})=>isActive?"active-link link":"link"}  to='/products'>Products</NavLink>
    </ul>
   </div>
  )
}

export default Navbar