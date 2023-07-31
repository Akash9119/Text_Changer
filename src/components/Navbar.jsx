import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className={`dropdown-menu dropdown-menu-${props.mode}`}>
            <li><Link className="dropdown-item" to="/">Word Count</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Capital to Small</Link></li>
            <li><Link className="dropdown-item" to="/">Small to Capital</Link></li>
            <li><Link className="dropdown-item" to="/">Extra Space Removal</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Copy Text To ClipBoard</Link></li>
            <li><Link className="dropdown-item" to="/">Clear Text</Link></li>
          </ul>
            </li>
            </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleSwitch}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
