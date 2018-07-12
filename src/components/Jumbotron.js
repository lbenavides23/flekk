import React from 'react';
import '../css/Jumbotron.css';
import shield from "../images/shield.svg";
import logo from "../images/logo.svg";
import { NavLink } from 'react-router-dom';


class Jumbotron extends React.Component {

  render() {
      
  
    return (
        <div className="jbtron-display" id="jbtron-displa" >
            <section className="jumbotron text-center jb-tron big">
                <div className="container">
                  <div className="jb-shades g1-anime circle spin">
                    <div className="jumbotron-heading mt-3"><img src={shield} className="jbtron-shield" alt="logo" /></div>
                    <div className="jumbotron-heading"><img src={logo} className="jbtron-logo" alt="logo" /></div>
                  </div>
                  <p className="lead text-muted g2-anime jb-shade">insurance for small businessess and freelancers.</p>
                  <NavLink to="/Apply" class="btn btn-primary my-2 btn-width g3-anime ">Get Coverage</NavLink>
                  <p className="btn-signin"><NavLink to="/Signin" class="btn btn-light my-2 btn-width g4-anime " role="button">Sign in</NavLink></p>
                </div>
            </section>
      </div>
    );
  }
}

export default Jumbotron;
