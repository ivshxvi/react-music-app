import { Link, NavLink, Outlet } from 'react-router-dom'
import React from "react";

function Nav() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/favorites">Favorite Songs</NavLink>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Nav