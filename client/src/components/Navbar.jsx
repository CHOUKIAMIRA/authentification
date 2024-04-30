import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar mb-12 mb-lg-24 navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img
          className="img-fluid"
          src="basko-assets/logos/basko-logo-dark.png"
          alt=""
        />
      </a>
      <button
        className="d-lg-none navbar-burger btn px-0 rounded-pill"
        style={{ border: "none" }}
        type="button"
      >
        <svg
          className="text-primary"
          width={51}
          height={51}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={56} height={56} rx={28} fill="currentColor" />
          <path
            d="M37 32H19M37 24H19"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-lg-auto me-4">
          <li className="nav-item me-4">
            <Link to="/" className="nav-link py-0" >
             Home
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/login" className="nav-link py-0" >
              Login
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/register" className="nav-link py-0" >
              Register
            </Link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar