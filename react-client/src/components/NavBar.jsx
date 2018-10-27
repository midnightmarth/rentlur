import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <div className='nav-bar'>
      <NavLink className='logo' to='/'>Rentlur</NavLink>
      <div onClick={()=> props.getFavs()}>
        <NavLink className='tags' activeStyle={{color:'white'}} to='/saved-rentals'>Saved Rentals</NavLink>
      </div>
      <NavLink className='tags' activeStyle={{color:'white'}} to='/login'>Login</NavLink>
      <NavLink className='tags' activeStyle={{color:'white'}} to='/signup'>Signup</NavLink>
    </div>
  )
}

export default NavBar;