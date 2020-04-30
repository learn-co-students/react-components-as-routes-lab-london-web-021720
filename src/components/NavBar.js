import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={Link}
      activeStyle={{
        background: 'darkblue'
      }}
      >
        Home
      </NavLink>
      
      <NavLink
      to="/movies"
      exact
      style={Link}
      activeStyle={{
        background: 'darkblue'
      }}
      >
        Movies
      </NavLink>

      <NavLink
      to="/directors"
      exact
      style={Link}
      activeStyle={{
        background: 'darkblue'
      }}>
        Directors
      </NavLink>

      <NavLink
      to="/actors"
      exact
      style={Link}
      activeStyle={{
        background: 'darkblue'
      }}>
        Actors
      </NavLink>

    </div>
  );
};

export default NavBar;
