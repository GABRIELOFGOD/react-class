import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({sideContent}) => {
  return (
    <nav className="justify-between py-3 px-20 bg-violet-900 flex text-white">
      <p className="text-xl font-bold">Logo</p>
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink clad
         to="/about">About</NavLink>
      </div>
      {sideContent}
    </nav>
  )
}

export default Navbar