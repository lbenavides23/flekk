import React from 'react';
import '../css/Signin.css';
import { NavLink } from 'react-router-dom';
import shield from '../images/shield.svg';
import logo from "../images/logo.svg";


class Signin extends React.Component {
  
  render() {
      
      
      
    return (
        <div class="text-center signin-div">
            <div>
                <NavLink to="/home" className="logo-div">
                    <img class="signin-shield" src={shield} alt="" />
                    <img src={logo} className="signin-logo" alt="logo" />
                </NavLink>
                <form class="form-signin">
                    <div class="bbx">
                        <h1 class="h3 mb-3 font-resetpw">Please Sign-in</h1>
                    </div>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                  <div class="mt-4 mb-4">
                      <NavLink to="/Resetpw" class="reset-link">Forgot password?</NavLink>
                  </div>
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  <p class="mt-5 mb-3 text-muted">Flekk &copy; 2018</p>
                </form>
            </div>
      </div>
      
    );
  }
}

export default Signin;


