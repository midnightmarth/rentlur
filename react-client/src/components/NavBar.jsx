import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='nav-bar'>
      <NavLink className='logo' to='/'>Rentlur</NavLink>
      <NavLink className='tags' activeStyle={{color:'white'}} to='/saved-rentals'>Saved Rentals</NavLink>
      <NavLink className='tags' activeStyle={{color:'white'}} to='/login'>Login</NavLink>
      <NavLink className='tags' activeStyle={{color:'white'}} to='/signup'>Signup</NavLink>
    </div>
  )
}

export default NavBar;