import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

function Menu(props){
  return(
    <div className="menu-wrapper">
      <style jsx>{`
        .menu-wrapper{
          text-align: center;
        }
        h1{
          padding: 20px;
        }
        .each-item{
          margin: 30px 20vw;
        }
      `}</style>
      <h1>Food menu</h1>
        {props.masterMenu.map((food, index)=>
          <div className="each-item">
            <MenuItem
              name = {food.name}
              price = {food.price}
              detail = {food.detail}
              key = {index}
            />
          </div>
        )}
    </div>
  );
}
Menu.propTypes = {
  masterMenu: PropTypes.array
}
export default Menu;
