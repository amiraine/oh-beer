import React from 'react';
import Navigation from './Navigation';
import TapList from './TapList';
import Router from './Router';
import Footer from './Footer';
function App(){
  return(
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,900');
        *{
          margin:0;
          padding:0;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
        }
      `}</style>
      <Navigation/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
