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
    borderBottom: '5px solid dark'
  }
  return(
    <div style={NAV_STYLES}>
      <style jsx>{`
        .logo {
          height: 100px;
        }
        .logo:hover{
          animation: spin 750ms ease-out 1;
        }
        @keyframes spin{
          0% { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }
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
        .container{
          width: 400px;
          display:flex;
          alignItems: center;
        }
        .dynamic{

          height: inherit;
          width: 300px;
        }
        .dynamic h2{
          line-height: 100px;
          text-align: center;
          font-size: 3em;
          color: rgba(0,0,0,0.1);
          background: url(https://img00.deviantart.net/1f7c/i/2009/066/2/8/watercolor_texture4_by_valerianastock.jpg);
          background-repeat: repeat-x;
          background-position: top center;
          -webkit-background-clip: text;
        }
        .dynamic h2:hover{
          animation: background 10s linear infinite;
        }
        @keyframes background{
          0% { background-position: left 0px top 10px;}
          40% { background position: left 800px top 10px; }
        }
      `}</style>
    <div className='container'>
      <img className='logo' src={logo} />
      <div className='dynamic'>
        <h2>Oh, Beer!</h2>
      </div>
    </div>
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
