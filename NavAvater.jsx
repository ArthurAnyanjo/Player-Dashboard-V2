import React from 'react'
import profileImg from '../images/user.jpg'

function NavAvater() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-profile d-flex align-items-center" data-bs-toggle="dropdown">
        <img src={profileImg} alt='profile' width={24} height={24} className='rounded-circle ms-2'/>
        <span className="d-md-block dropdown-toggle ps-2 me-2">Arthur</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Arthur</h6>
          <span>Web Developer</span>
        </li>


        <li>
          <hr className="dropdown-divider" />
        </li>



      </ul>
    </li>
  );
}

export default NavAvater