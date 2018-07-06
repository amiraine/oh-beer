import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const TAP_STYLE = {
    padding: '10px'
  }
  const DIVIDER = {
    textDecoration: 'underline'
  }
  let emptyKeg = null;

  if (props.remaining === 0){
    emptyKeg = 'This beer is sold out!'
  }
  return(
    <div style={TAP_STYLE}>
      <style jsx>{`
        strong{
          color: red;
          text-decoration: underline;
        }
      `}</style>
      <div className="items">
        <h4>{props.name} by {props.brewer}</h4>
        <strong>{emptyKeg}</strong>
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
