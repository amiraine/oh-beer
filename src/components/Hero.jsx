import React from 'react';

function Hero(){
  return(
    <div className="hero">
      <style>{`
        .hero{
          background: url('https://images.pexels.com/photos/46527/beer-the-bottle-wine-shop-46527.jpeg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
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
        h1{
          font-size: calc(100% + 4em);
        }
        h3{
          font-size: 2em;
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
      <h1>Oh, Beer!</h1>
      <h3>Portland's #1 Tap Room</h3>
    </div>
  );
}

export default Hero;
