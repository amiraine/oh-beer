import React from 'react';
import PropTypes from "prop-types";

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
  name: PropType.string,
  brewer: PropType.brewer,
  description: PropType.description,
  abv: PropType.abv,
  price: PropType.price,
  remaining: PropType.remaining
};

export default Tap;
