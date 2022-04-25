import React from 'react'
import { IconType } from 'react-icons';
import { AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

interface TopNavProps {
  className?: string,
  icon?: IconType
}

export default function TopNav ({className}:TopNavProps) {
  return (
    <nav className='bg-emerald-500' >
      <ul className='flex ml-auto mr-4 w-fit'>
        <li className='navbar-list'> 
        <AiOutlineHome size="1.5em" title="Home" className='navbar-icon'/> 
        </li>
        <li className='navbar-list'>
          <BsPersonCircle size="1.5em" title="About" className='navbar-icon'/>
          </li>
        <li className='navbar-list'>
          <AiOutlineMail size="1.5em" title="Contact" className='navbar-icon'/>
        </li>
      </ul>
    </nav>
  )
}