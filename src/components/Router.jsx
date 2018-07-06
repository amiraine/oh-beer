import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TapList from './TapList';
import Hero from './Hero';
import Error404 from './Error404';
import AgeCheck from './AgeCheck';
import Admin from './Admin';

function Router(){

  return(
    <div>
      <Switch>
        <Route exact path='/' component={Hero}/>
        <Route path="/taps" component={TapList}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/aa" component={AgeCheck}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default Router;
