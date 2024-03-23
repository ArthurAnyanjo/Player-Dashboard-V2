import React from 'react'
import './sideBar.css'

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <div className="item">
            <span className="title">Main</span>
        <a href="/homea">
                <img src="/home.svg" alt="" />
            <span className="listItemHome">Home</span>
            </a>
        </div>
    </aside>
  )
}

export default SideBar