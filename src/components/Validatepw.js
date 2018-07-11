import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../javascript/validatepw.js';
import '../css/Validatepw.css';

class Validatepw extends Component {
  

  render() {
  

  
    return (
        <div className="">

            {/*** Monthly/Yearly Circle Section***/}     
            <div class="container mt-4">
 
                  <h3 className="cp-title text-center">Create New Password</h3>
        
            <div className="row justify-content-md-center mt-4">
              <form action="">
                <div className="mt-2 mb-2">
                    <label for="psw">Password</label>
                    <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                </div>
                <div className="mt-2 mb-2">
                    <label for="cpsw">Confirm Password</label>
                    <input type="password" id="cpsw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                </div>
                <NavLink to="/Profile" className="btn btn-primary">Log in</NavLink>
              </form>
            </div>
</div>
      </div>
    );
  }
}

export default Validatepw;
