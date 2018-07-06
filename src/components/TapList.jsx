import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){

  return(
    <div>
      <style jsx>{`
        div{
          text-align: center;
        }
        h1{
          background-color: #ffa391;
          padding: 20px 0px;
          color: white;
        }
      `}</style>
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
