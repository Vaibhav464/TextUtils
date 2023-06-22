import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-body-tertiary border-bottom border-dark`} // backticks(``) allows to made string
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/home"> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
              {/* <Link className="nav-link active" aria-current="page" to="/home"> */}
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <div className="form-check form-check-inline">
            <input className="form-check-input border-dark" onClick={props.blueColor} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="inlineRadio1">B</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input border-dark" onClick={props.greenColor} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="inlineRadio2">G</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input border-dark" onClick={props.darkColor} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="inlineRadio3">D</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
