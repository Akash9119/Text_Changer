import React from 'react';

function Navbar(props) {
  return (
    <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
                </li>
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Word Count</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Capital to Small</a></li>
            <li><a className="dropdown-item" href="/">Small to Capital</a></li>
            <li><a className="dropdown-item" href="/">Space Removal</a></li>
          </ul>
            </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
