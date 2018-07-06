import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){
  const TAPLIST = {
    textAlign: 'center',
    padding: '50px'
  }
  return(
    <div style={TAPLIST}>
      <h1>Current beers on tap</h1>
      {props.masterTapList.map((tap, index)=>
        <Tap name = {tap.name}
          brewer = {tap.brewer}
          description = {tap.description}
          abv = {tap.abv}
          price = {tap.price}
          remaining = {tap.remaining}
          key = {index}
        />
      )}
    </div>
  );
}
TapList.propTypes = {
  masterTapList: PropTypes.array
}
export default TapList;
