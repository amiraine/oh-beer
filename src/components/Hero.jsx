import React from 'react';

function Hero(){
  const HERO_STYLE = {
    background: 'url(https://images.pexels.com/photos/46527/beer-the-bottle-wine-shop-46527.jpeg)',
    backgroundSize: '100vw',
    backgroundPosition: 'top',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: '5px solid darkgrey'
  };
  const HERO_H1 ={
    fontSize: "calc(100% + 4em)",
  };
  const HERO_H3 = {
    fontSize: '2em',
  };
  return(
    <div style = {HERO_STYLE}>
      <style>{`
        h1,h3{
          text-shadow: 1px 1px 20px #333333;
          color: white;
        }
      `}</style>
      <h1 style = {HERO_H1}>Oh, Beer!</h1>
      <h3 style = {HERO_H3}>Portland's #1 Tap Room</h3>
    </div>
  );
}

export default Hero;
