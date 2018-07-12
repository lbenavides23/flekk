import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import shield from '../images/shield.svg';
import '../css/Onboarding.css';

import logo from "../images/logo.svg";
import wounded from "../images/icons-flaticon/wounded.svg";
import accident from "../images/icons-flaticon/accident.svg";
import business from "../images/icons-flaticon/finances.svg";

import angleLeft from "../images/icons-fontawesome/angle-left.svg";
import angleRight from "../images/icons-fontawesome/angle-right.svg";


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
                    
                        {/****** Onboarding #1 ******/}
                        <div class="carousel-item active">
                            <div class="container">
                                <div class="carousel-caption text-center main-cont">
                                    <img class="ob-shield" src={shield} alt="shield logo" />
                                    <img src={logo} className="ob-logo" alt="logo" />
                                </div>
                                <p><NavLink to="/Apply" class="btn btn-primary btn-width" role="button">Get Insured</NavLink></p>
                                <p><NavLink to="/Signin" class="btn btn-signin btn-light btn-width " role="button">Log in</NavLink></p>
                            </div>
                        </div>
                     
                        {/****** Onboarding #2 ******/}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="carousel-caption text-center">
                                    <img class="info-images" src={wounded} alt="" />
                                    <div className="row ob-textbox">
                                        <h4 className="info-subtitle col-lg-12">Protect Your Business</h4>
                                        <p className="log-info lead text-muted col-lg-12">Small business lawsuits cost between $3,000 and $150,000.</p>
                                    </div>
                                </div>
                                <p><a class="btn btn-primary btn-width" href="/Apply" role="button">Get Insured</a></p>
                                <p><a class="btn btn-signin btn-width" href="/signin" role="button">Log in</a></p>
                            </div>
                        </div>

                        {/****** Onboarding #3 ******/}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="carousel-caption text-center">
                                    <img class="info-images" src={accident} alt="" />
                                    <div className="row ob-textbox">
                                        <h4 className="info-subtitle col-lg-12">Get Coverage</h4>
                                        <p className="log-info lead text-muted col-lg-12">Customer slip-and-fall accidents cost about $20,000 on average.</p>
                                    </div>
                                </div>
                                <p><a class="btn btn-primary btn-width" href="/Apply" role="button">Get Insured</a></p>
                                <p><a class="btn btn-signin btn-width" href="/signin" role="button">Log in</a></p>
                            </div>
                        </div>
                        
                        {/****** Onboarding #4 ******/}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="carousel-caption text-center">
                                    <img class="info-images" src={business} alt="" />
                                    <div className="row ob-textbox">
                                        <h4 className="info-subtitle col-lg-12">Business Owner's Policy</h4>
                                        <p className="log-info lead text-muted col-lg-12">Purchase a insurance package and focus on growing your business.</p>
                                    </div>
                                </div>
                                <p><a class="btn btn-primary btn-width" href="/Apply" role="button">Get Insured</a></p>
                                <p><a class="btn btn-signin btn-width" href="/signin" role="button">Log in</a></p>
                            </div>
                        </div>


                      
                    </div>
                    
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                      <img src={angleLeft} className="ob-arrows"></img>
                      <span class="sr-only">Previous</span>
                    </a>
                    
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                       <img src={angleRight} className="ob-arrows"></img>
                      <span class="sr-only">Next</span>
                    </a>
                    
                </div>
                
                

      </div>
    );
  }
}

export default Onboarding;
