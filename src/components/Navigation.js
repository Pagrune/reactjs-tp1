import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            // style={({ isActive }) =>
            //   isActive ? activeStyle : undefined
            // }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/PageEssai"
            // style={({ isActive }) =>
            //   isActive ? activeStyle : undefined
            // }
          >
            Page Essai
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
