import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutInfo}
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => {props.togglemode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => {props.togglemode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => {props.togglemode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={() => {props.togglemode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
            </div> */}
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
                // onClick={() => {props.togglemode(null)}}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutInfo: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set text hear",
  aboutInfo: "set About info hear",
};
