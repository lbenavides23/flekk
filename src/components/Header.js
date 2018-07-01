import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import logo from "../images/logo.svg";
import shield from '../images/shield.svg';
import '../css/Header.css';

class Header extends Component {
  render() {
      
    return (
        <div className="header-display">
        
            {/**** Beginning - Nav Bar with Burger Icon ****/}
            <div className="menu-bar">
                
                    <NavLink to="/home" className="in-block logo-menu navbar-brand d-flex justify-content-between">
                        <img src={shield} className="App-shield" alt="shield" />
                        <img src={logo} className="App-logo" alt="logo" />

                </NavLink>
             <div>
                
                <div className="in-block bgr-menu">
                    <div id="nav-icon2">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
            </div>    
            </div>
        {/**** Ending - Nav Bar with Burger Icon ****/}
        
           {/**** Beginning Toggle ****/}
            
            <div id="hidden-menu" className="hid-menu">
                <div class="group">
                
                    {/**** LEFT SIDE - MENU BAR ****/}
                    <div className="left">
                
                        {/**** Social Media Icons ****/}
                        <div className="row pd">
                        <p className="pd"> <b>About Us </b></p>
                        <p className="about-info pd"> Flekk is an insurTech startup that's leverages modern technology to make the business insurance incredibly easier to understand and manage online. </p>
                        </div>
                        <div className="row pd ex-padding ">
                         <a href="mailto:lbenavides@flekk.io?subject=insurance on Fleek" alt="email"><i class="fa fa-lg fa-envelope" alt="envelope icon"></i></a>
                         <a href="https://twitter.com/flekk3" target="_blank" rel="noopener noreferrer" alt="twitter"><i class="fa fa-lg fa-twitter" aria-hidden="true"  alt="twitter icon"></i></a> 
                         <a href="https://www.facebook.com/flekk18" target="_blank" rel="noopener noreferrer" alt="facebook icon"><i class="fa fa-lg fa-facebook" aria-hidden="true"  alt="facebook icon"></i></a> 
                         <a href="https://www.linkedin.com/company/flekk" target="_blank" rel="noopener noreferrer" alt="linkedin icon"><i class="fa fa-lg fa-linkedin" aria-hidden="true"  alt="linkedin icon"></i></a>
                         <a href="" target="_blank" rel="noopener noreferrer" alt="instagram icon"><i class="fa fa-lg fa-instagram" aria-hidden="true"  alt="instagram icon"></i></a>
                         <a href="" target="_blank" rel="noopener noreferrer" alt="youtube"><i class="fa fa-lg fa-youtube-play" aria-hidden="true"  alt="youtube icon"></i></a>
                        </div>
                        
                         {/**** Company Web Links ****/}
                        <div className="row pd ex-padding">
                            <NavLink className="about-links" to="/team">Team</NavLink>
                            <NavLink className="about-links" to="/press">Press</NavLink>
                        </div>
        
                    </div>
                    
                     {/**** RIGHT SIDE - Application Steps ****/}
                    <div className="right">
                        <p className="ly"> <b>Application Progress </b></p>
                        <p className="ly"> Step 1 : Individual Info </p>
                        <p className="ly"> Step 2 : Business Info </p>
                        <p className="ly"> Step 3 : Select Plan</p>
                        <p className="ly"> Step 4 : Payment </p>
                    </div>
                </div>
            </div>
            
        {/**** Beginning Toggle ****/}

      </div>
    );
  }
}

$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open')
		$('#hidden-menu').slideToggle(500);
	});
});
	
export default Header;
