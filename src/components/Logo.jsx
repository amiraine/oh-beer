import React from 'react';
import logo from '../assets/images/logo.png';
import beerfoam from '../assets/images/font-background.jpg';
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
          color: rgba(255,210,86,0.2);
          background-repeat: none;
          background: url('https://i.imgur.com/VmZ1FH6.jpg?1');
          background-position: top center;
          -webkit-background-clip: text;
          font-weight: 900;
          margin-left: 20px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ff8d77;
        }
        h2:hover{
          animation: background 8s linear infinite;
        }
        @keyframes background{
          0% { background-position: left 0px top 0px;}
          80% { background-position: left 0px top -200px; }
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
