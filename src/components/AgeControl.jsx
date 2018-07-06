import React from 'react';
import AgeCheck from './AgeCheck';
import Hero from './Hero';

class AgeControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ageChecked: false
    }
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleConfirm(){
    this.setState({ageChecked: true});
  }
  render(){
    let visibleContent = null;
    if(this.state.ageChecked === false){
      visibleContent = <AgeCheck/>;
    } else {
      visibleContent = <Hero/>;
    }
    return(
      <div>
        {visibleContent}
      </div>
    );
  }
}
export default AgeControl;
