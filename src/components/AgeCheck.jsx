import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AgeCheck(props){
  const AGE_LINK = {
    fontSize: '2.5em',
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: '10px',
    margin: '20px',
    width: '250px'
  }
  return(
    <div className="check-wrapper">
      <style jsx>{`
          .check-wrapper{
            background-color: black;
            background: url('https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg');
            height: 100vh;
            width: 100vw;
            background-size: cover;
            background-repeat: no-repeat;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .check-text{
            font-size: 3.5em;
            color: white;
            text-shadow: 1px 1px 20px #333;
            margin: 20px;
          }
          `}</style>
      <h1 className="check-text">Are you over 21 or older?</h1>
      <div>
        <Link to="/home" onClick={props.onConfirm} style={AGE_LINK}>Yes</Link>
        <a href="https://google.com" style={AGE_LINK}>No</a>
      </div>
    </div>
  )
}
AgeCheck.propTypes = {
  onConfirm: PropTypes.func
};

export default AgeCheck;
