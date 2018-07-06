import React from 'react';
import PropTypes from 'prop-types';

function MenuItem(props){
  return(
    <div>
      <style jsx>{`
        h5{
          text-decoration: underline;
        }
      `}</style>
      <div className="items">
        <h4>{props.name} - ${props.price}</h4>
        <h5>{props.detail}</h5>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
}

export default MenuItem;
