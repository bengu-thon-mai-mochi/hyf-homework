import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import About from './About';
import Profile from './Profile';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/:username" children={<Profile />} />
      </Switch>  
    </div>
  );
}

export default App;
