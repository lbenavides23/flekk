import React from 'react';
import '../css/Jumbotron.css';
import logo from "../images/logo.svg";
import { NavLink } from 'react-router-dom';


class Jumbotron extends React.Component {

  render() {
      
  
    return (
        <div className="jbtron-display" id="jbtron-displa" >
            <section class="jumbotron text-center jb-tron big">
                <div class="container">
                  <h1 class="jumbotron-heading g1-anime "><img src={logo} className="jbtron-logo" alt="logo" /></h1>
                  <p class="lead text-muted g2-anime jb-shade">insurance for small businessess and freelancers.</p>
                  <NavLink to="/Apply" class="btn btn-primary my-2 btn-width g3-anime ">Get Coverage</NavLink>
                  <p className="btn-signin"><NavLink to="/Signin" class="btn btn-light my-2 btn-width g4-anime " role="button">Sign in</NavLink></p>
                </div>
            </section>
      </div>
    );
  }
}

export default Jumbotron;
