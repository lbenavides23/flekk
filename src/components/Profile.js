import React, { Component } from 'react';
import '../css/Profile.css';
import '../javascript/profile.js';

import shield from '../images/shield.svg';
import plus from '../images/icons-fontawesome/plus-circle.svg';
import policy from '../images/icons-flaticon/check-mark.svg';
import card from '../images/icons-flaticon/shopping-store.svg';
import claims from '../images/icons-flaticon/contract.svg';
import alerts from '../images/icons-flaticon/protest.svg';
import woman from '../images/icons-flaticon/woman.svg';


class Profile extends Component {
  

  render() {
  

  
    return (
        <div className="">
        
        
        
            {/*** Navbar Section***/}     
            <div id="profile-navbar">
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>
                    
                    <a className="sidenav-text">Account</a>
                    <a href="#">Profile</a>
                    <a href="#">Password</a>
                    <a href="#">Payments</a>
                    
                    <a className="sidenav-text">Help & Support</a>
                    <a href="#">Help Center</a>
                    <a href="#">Report a Problem</a>
                    <a href="#">Terms & Privacy</a>                    
                    
                    <a className="sidenav-text">Settings & Privacy</a>
                    <a href="#">Settings</a>
                    <a href="#">Privacy</a>
                    <a href="#">Notifications</a>
                    
                    
                    <a href="#">Logout</a>
                    
                    
                </div>
                <div class="navbar">
                    <div class="container d-flex justify-content-between">
                      <a href="#" class="navbar-brand d-flex align-items-center">
                        <img src={shield} className="pf-shield"></img>
                      </a>
                      <div>
                        <span class="smx" id="openNav">&#9776;</span>
                      </div>
                    </div>
                </div>
            </div>

                
        
        
        
        
            
            {/*** Profile Section***/}
            <div className="container mt-2">
                <div className="row text-center">
                    <div className="col-lg-12" class="div-pf-img">
                            <input type="file" id="my_file" />
                             <img src={woman} class="pf-image"/>
                             <img src={plus} class="pf-plus" id="get_file"/>
                    </div>
                    <h4 className="col-lg-12">Jane Adams</h4>
                    <h5 className="col-lg-12 text-muted">Designer</h5>
                    <h8 className="col-lg-12">Financial Sector</h8>
                </div>
            </div>
            
            
            
            
             <div className="container mt-4">
                
                
                {/*** #1 Vertical Row ***/}
                <div className="row">
                    
                    {/*** CARD #1 ***/}
                    <div className="col-md-12 col pf-card-div">
                        <div className="row justify-content-md-center">
                            <div className="pf-icons-div">
                               <img src={policy} class="pf-icons"/>
                            </div>
                            <div className="col pf-title-div ">
                                <h6 className="lead pf-title">Policy</h6>
                                <p className="text-muted">Utenimad</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    {/*** CARD #2 ***/}
                    <div className="col-md-12 col pf-card-div">
                        <div className="row justify-content-md-center">
                            <div className="pf-icons-div">
                               <img src={card} class="pf-icons"/>
                            </div>
                            <div className="col pf-title-div ">
                                <h6 className="lead pf-title">Payment</h6>
                                <p className="text-muted">Utenimad</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                
                {/*** #2 Vertical Row ***/}
                 <div className="row">
                 
                   {/*** CARD #3 ***/}
                    <div className="col-md-12 col pf-card-div">
                        <div className="row justify-content-md-center">
                            <div className="pf-icons-div">
                               <img src={alerts} class="pf-icons"/>
                            </div>
                            <div className="col pf-title-div ">
                                <h6 className="lead pf-title">Alerts</h6>
                                <p className="text-muted">Utenimad</p>
                            </div>
                        </div>
                    </div>
                
                    {/*** CARD #4 ***/}
                    <div className="col-md-12 col pf-card-div">
                        <div className="row justify-content-md-center">
                            <div className="pf-icons-div">
                               <img src={claims} class="pf-icons"/>
                            </div>
                            <div className="col pf-title-div ">
                                <h6 className="lead pf-title">Claims</h6>
                                <p className="text-muted">Utenimad</p>
                             </div>
                        </div>
                    </div>
                    
                    
                </div>               
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            </div>
            


      </div>
    );
  }
}

export default Profile;
