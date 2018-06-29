import React from 'react';
import { Link } from 'react-router-dom';
function AgeCheck(){
  const AGE ={
    backgroundColor: 'black',
    background: 'url(https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg)',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: '0vh',
    left: '0',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  }
  const AGE_TEXT = {
    fontSize: '3.5em',
    color: 'white',
    textShadow: '1px 1px 20px #333333',
    margin: '20px'
  }
  const AGE_LINK = {
    fontSize: '2.5em',
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: '10px',
    margin: '20px',
    width: '200px'
  }
  return(
    <div style={AGE}>
      <h1 style={AGE_TEXT}>Are you over 21 or older?</h1>
      <div>
        <Link to="/home" style={AGE_LINK}>Yes</Link>
        <Link to="/nothing" style={AGE_LINK}>No</Link>
      </div>
    </div>
  );
}

export default AgeCheck;
