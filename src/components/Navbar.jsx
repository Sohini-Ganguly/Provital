import React, { useState } from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    "List your practice",
    "For Employers",
    "Courses",
    "Books",
    "Speakers",
    "Doctors",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-container">
            <img src="/images/Vector.svg" alt="ProVital Logo" className="logo" />
          </div>
          <span className="brand">ProVital</span>
        </div>

        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>{item}</li>
              {index < navItems.length - 1 && <span className="divider" />}
            </React.Fragment>
          ))}

          <span className="divider" />

          <li
            className="login-signup"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Login / Signup &#x25BE;
            {showDropdown && (
  <div className="dropdown">
    <div className="dropdown-row">
      <span className="dropdown-title">Doctor</span>
      <div className="dropdown-links">
        <a href="#">Login</a>
        <a href="#">Sign up</a>
      </div>
    </div>
    <div className="dropdown-divider" />
    <div className="dropdown-row">
      <span className="dropdown-title">Patients</span>
      <div className="dropdown-links">
        <a href="#">Login</a>
        <a href="#">Sign up</a>
      </div>
    </div>
  </div>
)}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
