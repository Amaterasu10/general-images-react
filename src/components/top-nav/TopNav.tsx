import React from 'react'
import { IconType } from 'react-icons';
import { AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

import { Link } from 'react-router-dom'

interface TopNavProps {
  className?: string,
  icon?: IconType
}

export default function TopNav ({className}:TopNavProps) {
  return (
    <nav>
      <ul className='flex ml-auto mr-4 w-fit'>
        <li className='navbar-list'> 
          <Link to="/">
            <AiOutlineHome size="1.5em" title="Home" className='navbar-icon'/>
          </Link>
        </li>

        <li className='navbar-list'>
          <Link to="contact">
            <AiOutlineMail size="1.5em" title="Contact" className='navbar-icon'/>
          </Link>
        </li>
        <li className='navbar-list'>
          <Link to="about">
            <BsPersonCircle size="1.5em" title="About" className='navbar-icon'/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}