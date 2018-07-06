import React from 'react';
import { Link } from 'react-router-dom';
function Footer(){
  const FOOTER_STYLE = {
    position: 'fixed',
    bottom: '0px',
    left: '0',
    width: '100vw',
    textAlign: 'center',
    height: '58px'
  }
  return(
    <div style={FOOTER_STYLE}>
      <sub>© Ami Cooper 2018 All Rights Reserved</sub>
      <br/><sub><Link to="/admin">Administrator</Link></sub>
    </div>
  );
}

export default Footer;
