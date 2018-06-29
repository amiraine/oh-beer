import React from 'react';

function Hero(){
  const HERO_STYLE = {

    backgroundSize: '100vw',
    backgroundPosition: 'top',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: '5px solid #ffa391'
  };
  const HERO_H1 ={
    fontSize: "calc(100% + 4em)",
  };
  const HERO_H3 = {
    fontSize: '2em',
  };
  return(
    <div className="hero">
      <style>{`
        .hero{
          background: url('https://images.pexels.com/photos/46527/beer-the-bottle-wine-shop-46527.jpeg');
          background-size: 100vw;
          background-position: 'top';
          height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-image: linear-gradient(90deg, #ffa391, #ffc757);
          border-image-slice:1;
        }
        h1,h3{
          text-shadow: 1px 1px 20px #333333;
          color: white;
        }
        h1:hover{
          animation: fade 1s ease-in 1;
          color: #ffa391;
        }
        @keyframes fade{
          0% {color: white; }
          100% {color: #ffa391; }
        }
      `}</style>
      <h1 style = {HERO_H1}>Oh, Beer!</h1>
      <h3 style = {HERO_H3}>Portland's #1 Tap Room</h3>
    </div>
  );
}

export default Hero;
