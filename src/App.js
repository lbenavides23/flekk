import React, { Component } from 'react';


import { Route, Redirect} from 'react-router-dom';

import Home from "./components/Home";
import Apply from "./components/Apply";
import Team from "./components/Team";
import Press from "./components/Press";
import Header from "./components/Header";
import Signin from "./components/Signin";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          < Header />
          <Route exact path="/home" component={Home} />
          <Route exect path="/apply" component={Apply} />
          <Route exect path="/team" component={Team} />
          <Route exect path="/press" component={Press} />
          <Route exect path="/Signin" component={Signin} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
      </div>
      
    );
  }
}

export default App;
