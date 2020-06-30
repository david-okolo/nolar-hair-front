import React, { FC } from 'react';
import './App.less';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import { Store } from './components/Store/Store';
import { CheckBooking } from './components/CheckBooking/CheckBooking';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';


const App: FC = (props) => {
  return (
    <Switch>
      <Route path='/booking'>
        <CheckBooking></CheckBooking>
      </Route>
      <Route path='/store'>
        <Store></Store>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/services'>
        <Services/>
      </Route>
      <Route path='/'>
        <Home></Home>
      </Route>
    </Switch>
  )
}


export default App;
