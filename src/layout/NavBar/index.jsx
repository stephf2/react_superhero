import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className='navbar-container'>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default NavBar
