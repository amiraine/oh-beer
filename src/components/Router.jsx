import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TapList from './TapList';
import Hero from './Hero';
import Error from './Error';

function Router(){

  return(
    <div>
      <Switch>
        <Route exact path='/' component={Hero}/>
        <Route path="/taps" component={TapList}/>
      </Switch>
    </div>
  );
}
