import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-box">
        <div className="nav-left">
          <span className="nav-logo">Second Brain</span>
          <div className="nav-links">
            <ul>
              <li className="active">
                <NavLink className="nav-link active" to="/add_blog">
                  Add New
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink className="nav-link active" to="/blog/1">
                  Blogs
                </NavLink>
              </li>
              <li>Register</li>
            </ul>
          </div>
        </div>

        <div className="nav-right">
          <ul>
            <li>
              <NavLink className="nav-link" to="/add_blog">
                Login
              </NavLink>
            </li>
          </ul>
          <button className="nav-btn">Surprise</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
