import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const TAP_STYLE = {
    border: '1px solid black'
  }
  return(
    <div style={TAP_STYLE}>
      <h4>{props.name} by {props.brewer}</h4>
      <h5>A {props.description}</h5>
      <h5>ABV: {props.abv} | Price: ${props.price} | Remaining: {props.remaining} pints</h5>
    </div>
  );
}

Tap.propTypes ={
  name: PropTypes.string,
  brewer: PropTypes.brewer,
  description: PropTypes.description,
  abv: PropTypes.abv,
  price: PropTypes.price,
  remaining: PropTypes.remaining
};

export default Tap;
