import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TapList from './TapList';
import Hero from './Hero';
import Error404 from './Error404';
import AgeCheck from './AgeCheck';

function Router(){

  return(
    <div>
      <Switch>
        <Route exact path='/no' component={AgeCheck}/>
        <Route path='/' component={Hero}/>
        <Route path="/taps" component={TapList}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default Router;
