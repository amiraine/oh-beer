import React from 'react';
import logo from '../assets/images/logo.png';

function Logo(){
  const LOGO_STYLES ={
    display: 'flex',
    alignItems: 'center'
  }
  return(
    <div style={LOGO_STYLES}>
      <style jsx>{`
        .logo {
          height: 100px;
        }
        .logo:hover {
          animation: spin 750ms ease-out 1;
        }
        h2{
          line-height: 100px;
          text-align: center;
          font-size: 3em;
          color: rgba(0,0,0,0.1);
          background: url(https://img00.deviantart.net/1f7c/i/2009/066/2/8/watercolor_texture4_by_valerianastock.jpg);
          background-repeat: repeat-x;
          background-position: top center;
          -webkit-background-clip: text;
          font-weight: 900;
          margin-left: 20px;
        }
        h2:hover{
          animation: background 10s linear infinite;
        }
        @keyframes background{
          0% { background-position: left 0px top 10px;}
          40% { background position: left 800px top 10px; }
        }
        @keyframes spin{
          0% { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }
    `}</style>
      <img className='logo' src={logo} />
      <div className='dynamic'>
        <h2>Oh, Beer!</h2>
      </div>
    </div>
  );
}

export default Logo;
