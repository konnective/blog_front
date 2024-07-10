import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

const Sidebar = ({ sidedata }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        {sidedata &&
          sidedata.map((item) => (
            <li key={item.id}>
              <NavLink className="link" to={`/post/${item.id}`}>
                {item.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
