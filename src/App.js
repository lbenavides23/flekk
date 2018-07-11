import React, { Component } from 'react';


import { Route, Redirect} from 'react-router-dom';

import Home from "./components/Home";
import Apply from "./components/Apply";
import Team from "./components/Team";
import Press from "./components/Press";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Resetpw from "./components/Resetpw";
import Preselect from "./components/Preselect";
import Prepayment from "./components/Prepayment";
import Checkout from "./components/Checkout";
import Validatepw from "./components/Validatepw";
import Profile from "./components/Profile";

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
          <Route exect path="/signin" component={Signin} />
          <Route exect path="/resetpw" component={Resetpw} />
          <Route exect path="/preselect" component={Preselect} />
          <Route exect path="/prepayment" component={Prepayment} />
          <Route exect path="/checkout" component={Checkout} />
          <Route exect path="/validatepw" component={Validatepw} />
          <Route exect path="/profile" component={Profile} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
      </div>
      
    );
  }
}

export default App;
