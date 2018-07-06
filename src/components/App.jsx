//React library imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Project directory imports
import Navigation from './Navigation';
import TapList from './TapList';
import Footer from './Footer';
import Hero from './Hero';
import Error404 from './Error404';
import AgeControl from './AgeControl';
import Admin from './Admin';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }
// functions go under here

  render(){
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
          <Switch>
            <Route exact path='/' component={AgeControl}/>
            <Route path="/taps" component={TapList}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/home" component={Hero}/>
            <Route component={Error404}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}


export default App;
