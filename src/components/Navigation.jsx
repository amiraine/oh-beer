import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navigation(){

  return(
    <div>
      <style jsx>{`
        img {
          height: 86px;
        }
        .link{
          text-decoration: none;
          color: red;
        }
      `}</style>
      <Link to="/"><img src={logo} />Home</Link>
      <Link to="/taps">Current Taps</Link>
    </div>
  );
}

export default Navigation;
