import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './style.css';

const Home = () => {
  return (
    <div>
      <center>
        <div className="btn">
          <Link to="/usuarios">
            <p style={{ textDecoration: 'none' }}>Lista de Posts</p>
          </Link>
        </div>
      </center>
    </div>
  );
};
export default Home;
