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
import Menu from './Menu';
import AdminTapList from './AdminTapList';

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
          remaining: 20,
          beerId: 1
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: 60,
          beerId: 6
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: '65',
          beerId: 2
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          remaining: 75,
          beerId: 3
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          remaining: 18,
          beerId: 4
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          remaining: 58,
          beerId: 5
        }
      ],
      masterMenu: [
        {
          name: 'French Fries',
          price: '5',
          detail: 'Crispy shoestring fries with truffle salt and fresh herbs'
        },
        {
          name: 'Chicken Wings',
          price: '8',
          detail: 'Freshly fried free range chicken with your choice of marinade and your choice of dipping sauce!'
        },
        {
          name: 'Nachos',
          price: '7',
          detail: 'Fresh tortilla chips in a housemade sharp cheddar and beer sauce with all the fixin\'s.'
        },
        {
          name: 'Mozzarella Bites',
          price: '8',
          detail: 'Bite-size pieces of mozzarella deep-fried in a beer batter and served with fresh marinara sauce.'
        }
      ]
    }
    this.handleAddNewTap = this.handleAddNewTap.bind(this);
    this.handleSelectedTap = this.handleSelectedTap.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }
// functions go under here
  handleAddNewTap(newTap){
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }
  handleSellPint(index){
    let newVolumeTapList = this.state.masterTapList.slice();
    for(var i = 0; i < newVolumeTapList.length; i++){
      if(i === index){
        if(newVolumeTapList[index].remaining >0){
          newVolumeTapList[index].remaining -= 1;
        }
      }
    };
    this.setState({masterTapList: newVolumeTapList});
    console.log(newVolumeTapList[index].remaining);
  }

  render(){
    return(
      <div className="parent-wrapper">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Poppins:400,900');
          *{
            margin:0;
            padding:0;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
          }
          *:focus{
            outline: none;
          }
          button{
            padding: 15px 45px;
            background-color: #ffa391;
            font-size: .75em;
            border-radius: 5px;
            border: 1px transparent;
          }
          h1{
            background-color: #ffa391;
            padding: 20px 0px;
            color: white;
            margin
          }
          .items:hover{
            animation: fade .5s ease-out 1;
            color: #ffa391;
          }
          @keyframes fade{
            0% {color: black; }
            100% {color: #ffa391; }
          }
        `}</style>
        <Navigation/>
          <Switch>
            <Route
              exact path='/'
              component={AgeControl}
            />
            <Route
              path="/taps"
              render={()=><TapList masterTapList={this.state.masterTapList}/>}
            />
            <Route
              path="/sales"
              render={()=><AdminTapList
                masterTapList ={this.state.masterTapList}
                handleSellPint = {this.handleSellPint}
              />
            }
            />
            <Route
              path="/admin"
              render={()=><Admin onNewTapCreation={this.handleAddNewTap} /> }
            />
            <Route
              path="/home"
              component={Hero}
            />
            <Route
              path="/menu"
              render={()=><Menu
                masterMenu = {this.state.masterMenu} />
              }
            />
          <Route
              component={Error404}
          />
          </Switch>
        <Footer/>
      </div>
    )
  }
}


export default App;
