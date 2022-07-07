import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/" className='li-link'>Home</Link>
        </li>
        <li>
          <Link to="/Admin" className='li-link'>Admin </Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}
