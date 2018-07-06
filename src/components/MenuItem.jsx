import React from 'react';
import PropTypes from 'prop-types';

function MenuItem(props){
  return(
    <div>
      <style jsx>{`
        h4{
          text-decoration: underline;
        }
      `}</style>
      <h3>{props.name} - ${props.price}</h3>
      <h4>{props.detail}</h4>
    </div>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
}

export default MenuItem;
