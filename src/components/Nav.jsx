import React from 'react'
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavAvater from './NavAvater';
import './nav.css';

function Nav() {
  return (
   <nav className='header-nav ms-auto'>
    <ul className='d-flex align-items-center'>
        <NavNotice/>
        <NavMessage/>
        <NavAvater/>
    </ul>

   </nav>
  )
}

export default Nav