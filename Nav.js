import React from 'react'
import "../css/Nav.css"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container nav d-flex">
        <span className="navbar-brand">e'lon.uz</span>
        <div className='navbar-name'>
        <i className="fa fa-user" aria-hidden="true"></i>
          <p className='ixti'>Ixtiyorjon Hakimov</p>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </nav>

    
  )
}

export default Nav