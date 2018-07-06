import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const TAP_STYLE = {
    padding: '10px'
  }
  const DIVIDER = {
    textDecoration: 'underline'
  }
  return(
    <div style={TAP_STYLE}>
      <style jsx>{`
        .tap-items:hover{
          animation: fade .5s ease-out 1;
          color: #ffa391;
        }
        @keyframes fade{
          0% {color: black; }
          100% {color: #ffa391; }
        }
      `}</style>
    <div className="tap-items">
        <h4>{props.name} by {props.brewer}</h4>
        <h5>{props.description}</h5>
        <div style={DIVIDER}>
          <h5>ABV: {props.abv} | Price: ${props.price} | Remaining: {props.remaining} pints</h5>
        </div>
      </div>
    </div>
  );
}

Tap.propTypes ={
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Tap;
