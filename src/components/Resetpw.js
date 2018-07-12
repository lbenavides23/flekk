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
                    <img src={logo} className="resetpw-logo mt-3" alt="logo" />
                </NavLink>
                <form class="form-resetpw">
                    <div>
                        <div class="mb-3 font-resetpw">Reset Password</div>
                        <p>Enter the email address you use for Flekk and we'll send you a password reset link</p>
                        <label for="inputEmail" class="sr-only return-email">Email address</label>
                        <input type="email" id="inputEmail" class="form-control return-emai" placeholder="Email address" required autofocus />
                    </div>
                  <button class="btn btn-primary btn-block btn-return res-padding-btn" type="submit">Reset Password</button>
                </form>
            </div>
      </div>
      
    );
  }
}

export default Resetpw;


