import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-display">
        
         {/* <!----------- FOOTER --------------------> */}
              <footer class="text-center">
                <div class="text-center lead footer-text">
                    <NavLink to="/team" className="footer-links">Team</NavLink> <span className="liner">|</span>
                    <NavLink to="/press" className="footer-links">Press</NavLink>
                </div>
                    
                    
                <div class="copy-year text-center">
                  <p className="lead">&copy; 2018 Flekk, Inc. All Rights Reserved</p>
                </div>
              </footer>   
           
            
      </div>
    );
  }
}

export default Footer;
