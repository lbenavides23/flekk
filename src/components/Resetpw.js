import React from 'react';
import '../css/Resetpw.css';
import { NavLink } from 'react-router-dom';
import shield from '../images/shield.svg';
import logo from "../images/logo.svg";


class Resetpw extends React.Component {
  
  render() {
      
      
      
    return (
        <div class="text-center resetpw-div">
            <div>
                <NavLink to="/home" className="logo-div">
                    <img class="resetpw-shield" src={shield} alt="" />
                    <img src={logo} className="resetpw-logo" alt="logo" />
                </NavLink>
                <form class="form-resetpw">
                    <div class="bbx">
                    <h1 class="mb-3 font-resetpw">Reset Password</h1>
                    <p>Enter the email address you use for Flekk and we'll send you a password reset link</p>
                    </div>
                    <label for="inputEmail" class="sr-only return-email">Email address</label>
                    <input type="email" id="inputEmail" class="form-control return-emai" placeholder="Email address" required autofocus />
                  <button class="btn btn-lg btn-primary btn-block btn-return nn" type="submit">Reset Password</button>
                </form>
            </div>
      </div>
      
    );
  }
}

export default Resetpw;


