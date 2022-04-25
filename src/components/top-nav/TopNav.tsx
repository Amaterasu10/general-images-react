import React from 'react'
import { AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

export default function TopNav() {
  return (
    <nav className=' bg-emerald-500'>
      <ul className='flex ml-auto mr-4 w-fit'>
        <li className='navbar-icon'> 
        <AiOutlineHome size="1.5em" title="Home"/> 
        </li>
        <li className='navbar-icon'>
          <BsPersonCircle size="1.5em" title="About"/>
          </li>
        <li className='navbar-icon'>
          <AiOutlineMail size="1.5em" title="Contact"/>
        </li>
      </ul>
    </nav>
  )
}