import React from 'react';

function Footer(){
  const FOOTER_STYLE = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100vw',
    textAlign: 'center'
  }
  return(
    <div style={FOOTER_STYLE}>
      <sub>© Ami Cooper 2018 All Rights Reserved</sub>
    </div>
  );
}

export default Footer;
