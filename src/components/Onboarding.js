import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import shield from '../images/shield.svg';
import '../css/Onboarding.css';

import logo from "../images/logo.svg";
import general from "../images/icons/general.png";
import commerical from "../images/icons/property.png";
import business from "../images/icons/business.png";

class Onboarding extends Component {
  
  
  render() {
  
  
    return (
        <div className="onboarding-display">
    
               <div id="myCarousel" class="carousel slide text-center" data-ride="carousel" data-interval="false">
                    <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                      <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>
                    
                    <div class="carousel-inner">
                    
                    
                        <div class="carousel-item active">
                            <div class="container">
                         
                                <div class="carousel-caption text-center">
                                    <img class="first-slide login-shield" src={shield} alt="" />
                                    <h4 className="lead info-title">insurance on <img src={logo} class="logo-login" alt="flekk logo"/></h4>
                                    <p className="info-swipe lead text-muted">Swipe to learn more.</p>
                                    <p><NavLink to="/Apply" class="btn btn-primary btn-width" role="button">Sign up</NavLink></p>
                                    <p><NavLink to="/Signin" class="btn btn-signin btn-light btn-width " role="button">Log in</NavLink></p>
                                </div>
                            
                            </div>
                        </div>
                      
                     
                        <div class="carousel-item">
                            <div class="container">
                              <div class="carousel-caption text-center">
                                <img class="first-slide info-images" src={general} alt="" />
                                    <h4 className="info-subtitle">Protect Your Business.</h4>
                                    <p className="log-info lead text-muted">Small business lawsuits cost between $3,000 and $150,000.</p>
                                    
                                    <p><a class="btn btn-primary btn-width" href="/Apply" role="button">Get Insured</a></p>
                                    <p><a class="btn btn-signin btn-width" href="/Sign In" role="button">Log in</a></p>
                              </div>
                            </div>
                        </div>
                      
                        <div class="carousel-item">
                            <div class="container">
                              <div class="carousel-caption text-center">
                                    <img class="first-slide info-images" src={commerical} alt="First slide" />
                                    <h4 className="info-subtitle">Accidents Happen, Get Insured.</h4>
                                    <p className="log-info lead text-muted">Customer slip-and-fall accidents cost about $20,000 on average.</p>
                                    <p><a class="btn btn-primary" href="/Apply" role="button">Get Insured</a></p>
                                    <p><a class="btn btn-signin btn-width" href="/Signin" role="button">Log in</a></p>
                              </div>
                            </div>
                        </div>
                        
                        
                        <div class="carousel-item">
                            <div class="container">
                              <div class="carousel-caption text-center">
                                    <img class="first-slide info-images" src={business} alt="First slide" />
                                    <h4 className="info-subtitle">Total Business Owner's Policy.</h4>
                                    <p className="log-info lead text-muted">Purchase a insurance package and focus on growing your business</p>
                                    <p><a class="btn btn-primary" href="/apply" role="button">Get Insured</a></p>
                                    <p><a class="btn btn-signin btn-width" href="/signin" role="button">Log in</a></p>
                              </div>
                            </div>
                        </div>
                      
                      
                    </div>
                    
                  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
                    
                </div>
                
                

      </div>
    );
  }
}

export default Onboarding;
