import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav () {
  return (
    <nav>
      <ul className='flex ml-auto mr-4 w-fit'>
        <li className='navbar-list'> 
          <Link to="/">
            Home
          </Link>
        </li>

        <li className='navbar-list'>
          <Link to="contact">
            Contact
          </Link>
        </li>
        <li className='navbar-list'>
          <Link to="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}