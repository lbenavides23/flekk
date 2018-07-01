import React, { Component } from 'react';
import Footer from "./Footer";
import '../css/Press.css';
import hcnyLogo from "../images/press/hcnyLogo.jpeg";


import '../css/Header.css';



class Press extends Component {
  render() {
    return (
        <div>
    
    
    
             <div className="row text-center featurette-heading div-format"> Flekk's Press and Events
            </div>
            
            
            <div className="container container-press">
                <div class="row div-card">
                      <div class="col-md-2 logo-padding">
                      <img src={hcnyLogo} class="logo-size" alt="hcny logo"/>
                      </div>
                      <div class="col-md-10 info-card">
                        <strong class="text-primary">Flekk News</strong>
                        <h3 className="text-dark">Flekk's Launch Party</h3>
                        <div class="text-muted">August 8</div>
                        <p class="card-text">Flekk's launch party is happening on August 8th at 6:30pm. Come join us at the Harvard Club of New York. Learn more about the team and the company.</p>
                        <a href="/" class="btn btn-primary r-now">Register Now</a>
                      
                      </div>
                </div>
            </div>
    
    
    
    
    
        
        <Footer />
    </div>
    );
  }
}

	
export default Press;
