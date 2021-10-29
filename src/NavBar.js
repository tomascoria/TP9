import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link className="linkhome" to="/">Home</Link>
      <Link className="linklista" to="/usuarios">Lista</Link>
    </nav>
  );
};
export default NavBar;

