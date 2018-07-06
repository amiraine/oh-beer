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
      masterTapList: [
        {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: '60'
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: '65'
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          remaining: '75'
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          remaining: '18'
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          remaining: '58'
        }
      ]
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
            <Route
              path="/taps"
              render={()=><TapList masterTapList={this.state.masterTapList}/>}
            />
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
