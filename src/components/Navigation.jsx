import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navigation(){
  const LINK = {
    textDecoration: 'none',
    fontSize: '1.5em'
  }
  const NAV_STYLES = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 100px 5px 20px',
    borderBottom: '5px solid darkgrey'
  }
  return(
    <div style={NAV_STYLES}>
      <style jsx>{`
        img {
          height: 100px;
        }
        img:hover{
          animation: spin 750ms ease-out 1;
        }
        @keyframes spin{
          0% { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }
      `}</style>
      <img src={logo} />
      <Link to="/" style={LINK}>Home</Link>
      <Link to="/taps" style={LINK}>Current Taps</Link>
    </div>
  );
}

export default Navigation;
