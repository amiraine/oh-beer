import React from 'react';
import PropTypes from "prop-types";

function Tap(props){

  return(
    <div>
      <h4>{props.name} by {props.brewer}</h4>
      <h5>A {props.description}</h5>
      <h5>ABV: {props.abv} | Price: ${props.price} | Remaining: {props.remaining} pints</h5>
    </div>
  );
}
Tap.propTypes ={
  name: PropType.string
}
export default Tap;
