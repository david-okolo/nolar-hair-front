import React, { FC } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import { Store } from './components/Store/Store';
import { CheckBooking } from './components/CheckBooking/CheckBooking';


const App: FC = (props) => {
  return (
    <Switch>
      <Route path='/booking'>
        <CheckBooking></CheckBooking>
      </Route>
      <Route path='/store'>
        <Store></Store>
      </Route>
      <Route path='/'>
        <Home></Home>
      </Route>
    </Switch>
  )
}


export default App;
