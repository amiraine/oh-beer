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
      <div className="items">
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
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  id: PropTypes.number
};

export default Tap;
