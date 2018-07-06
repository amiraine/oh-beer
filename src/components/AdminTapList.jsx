import React from 'react';
import AdminTap from './AdminTap';
import PropTypes from 'prop-types';

function AdminTapList(props){
  return(
    <div>
      <style jsx>{`
        h1{
          text-align: center;
          color: white;
          padding: 20px 0px;
          background-color: #ffa391;
          margin-bottom: 20px;
        }
      `}</style>
      <h1>Current beers for sale</h1>
      {props.masterTapList.map((tap, index)=>
        <AdminTap name = {tap.name}
          brewer = {tap.brewer}
          description = {tap.description}
          abv = {tap.abv}
          price = {tap.price}
          remaining = {tap.remaining}
          key = {index}
          beerId = {index}
          handleSellPint = {props.handleSellPint}
        />
      )}
    </div>
  );
}
AdminTapList.propTypes = {
  masterTapList: PropTypes.array,
  handleSellPint: PropTypes.func
}
export default AdminTapList;
