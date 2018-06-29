import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
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
    borderBottom: '5px solid dark'
  }
  return(
    <div style={NAV_STYLES}>
      <style jsx>{`
        @keyframes underline{
          0% { border-bottom: 5px solid white; }
          100% { border-bottom: 5px solid black }
        }
        .links:hover{
          animation: underline .5s ease-in 1;
          border-bottom: 5px solid black;
        }
        .links{
          box-sizing: border-box;
        }
        .dynamic{

          height: inherit;
          width: 300px;
        }
      `}</style>
      <Logo/>
      <div className='links'>
        <Link to="/" style={LINK}>Home</Link>
      </div>
      <div className='links'>
        <Link to="/taps" style={LINK}>Current Taps</Link>
      </div>
    </div>
  );
}

export default Navigation;
