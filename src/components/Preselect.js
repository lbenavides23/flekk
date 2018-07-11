import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../javascript/preselect.js';


import carrotdown from '../images/icons-fontawesome/caret-down.svg';
import professional from '../images/icons-flaticon/boss-1.svg';
import businessoffice from '../images/icons-flaticon/online-store-2.svg';
import seniormgmt from '../images/icons-flaticon/network-1.svg';
import workscomp from '../images/icons-flaticon/collaboration.svg';
import plus from '../images/icons-fontawesome/plus-circle.svg';

import exclamation from '../images/icons-fontawesome/exclamation-triangle.svg';

import '../css/Preselect.css';

class Preselect extends Component {
  render() {
    return (
        <div>
        
            {/** Beginning of Container **/}
            <div className="container justify-content-between dfsf">
             

                 {/** Hidden Warning Modal **/}
                 <div className="row">
                 
                        {/** Modal **/}
                        <div id="myModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <img src={exclamation} className="exc-tri" />
                                <div>Warning</div>
                                <p>Based on your responses, we recommended this insurance. If you decide not to keep the policy, you are not sinured for any future claims made in this area.</p>
                                
                                <row>
                                    <button className="btn btn-primary btn-keep" id="btn-kp">Keep Policy</button>
                                    <button className="btn btn-danger btn-reject">Unselect Policy</button>
                                 </row>
                             </div>
                        </div>
                 </div>
                  
              
              
                {/** Review Reommended Policies**/}
              
                <div className="row review-title mt-4 mb-4">
                    <h5 className="text-center review-subt">Review Recommended Policies</h5>
                 </div>
              
              
                {/** Policy Card #1 **/}
                 <div className="row pspolicy-card mb-4 justify-content-between">
                    {/** Circle Icon **/}
                    <img src={plus} className="apply-circle-plus" id="myBtn" />
                            
                    {/** Policy Icon **/}
                    <img src={professional} class="ps-icon"></img>
                                            
                    {/** Title & Subtitle **/}
                    <div className="dib dfb">
                        <div className="ins-title">Professional</div>
                        <div className="ins-subtitle text-muted">Errors & Omissions</div>
                    </div>
                                        
                    {/** Carrot Dropdown **/}
                    <div data-toggle="collapse" data-target="#TogglContent1" aria-controls="TogglContent1" aria-expanded="false" className="carr-div">
                        <img src={carrotdown} class="pspolicy-carrot"></img>
                    </div>
                                          
                    {/** Hidden Text **/}
                    <div className="collapse" id="TogglContent1">
                        <div className="bg-dark p-4">
                            <h5 className="text-white">Errors and Omissions</h5>
                            <span className="ps-hidden-text">Provides protection for your professional services business from claims of negligence during the course of conducting business.</span>
                        </div>
                    </div>
                </div>
                
                
                {/** Policy Card #2 **/}
                 <div className="row pspolicy-card mb-4 justify-content-between">
                    {/** Circle Icon **/}
                    <img src={plus} className="apply-circle-plus" id="myBtn" />
                            
                    {/** Policy Icon **/}
                    <img src={businessoffice} class="ps-icon"></img>
                                            
                    {/** Title & Subtitle **/}
                    <div className="dib dfb">
                        <div className="ins-title">Business Owners Policy</div>
                        <div className="ins-subtitle text-muted">General Liability</div>
                    </div>
                                        
                    {/** Carrot Dropdown **/}
                    <div data-toggle="collapse" data-target="#TogglContent2" aria-controls="TogglContent1" aria-expanded="false" className="carr-div">
                        <img src={carrotdown} class="pspolicy-carrot"></img>
                    </div>
                                          
                    {/** Hidden Text **/}
                    <div className="collapse" id="TogglContent2">
                        <div className="bg-dark p-4">
                            <h5 className="text-white">General Liability</h5>
                            <span className="ps-hidden-text">Provides protection against third party's claims, such as bodily injury, property damage, and personal injury. Required for most commerical leases.</span>
                        </div>
                    </div>
                </div>
                
                
                
                
                {/** Policy Card #3 **/}
                 <div className="row pspolicy-card mb-4 justify-content-between">
                    {/** Circle Icon **/}
                    <img src={plus} className="apply-circle-plus" id="myBtn" />
                            
                    {/** Policy Icon **/}
                    <img src={workscomp} class="ps-icon"></img>
                                            
                    {/** Title & Subtitle **/}
                    <div className="dib dfb">
                        <div className="ins-title">Workers' Compensation</div>
                        <div className="ins-subtitle text-muted">Accidents & Injury</div>
                    </div>
                                        
                    {/** Carrot Dropdown **/}
                    <div data-toggle="collapse" data-target="#TogglContent3" aria-controls="TogglContent1" aria-expanded="false" className="carr-div">
                        <img src={carrotdown} class="pspolicy-carrot"></img>
                    </div>
                                          
                    {/** Hidden Text **/}
                    <div className="collapse" id="TogglContent3">
                        <div className="bg-dark p-4">
                            <h5 className="text-white">Accidents & Injury</h5>
                            <span className="ps-hidden-text">Protects you from the costs associated with an employee’s work-related illness or injury. Mostly Required for businesses with employees.</span>
                        </div>
                    </div>
                </div>
                
                
                {/** Policy Card #3 **/}
                 <div className="row pspolicy-card mb-4 justify-content-between">
                    {/** Circle Icon **/}
                    <img src={plus} className="apply-circle-plus" id="myBtn" />
                            
                    {/** Policy Icon **/}
                    <img src={seniormgmt} class="ps-icon"></img>
                                            
                    {/** Title & Subtitle **/}
                    <div className="dib dfb">
                        <div className="ins-title">Directors & Officers</div>
                        <div className="ins-subtitle text-muted">Investors</div>
                    </div>
                                        
                    {/** Carrot Dropdown **/}
                    <div data-toggle="collapse" data-target="#TogglContent4" aria-controls="TogglContent1" aria-expanded="false" className="carr-div">
                        <img src={carrotdown} class="pspolicy-carrot"></img>
                    </div>
                                          
                    {/** Hidden Text **/}
                    <div className="collapse" id="TogglContent4">
                        <div className="bg-dark p-4">
                            <h5 className="text-white">Investors</h5>
                            <span className="ps-hidden-text">Protects personal assets of directors and officers, and spouses, in the event they are personally sued.</span>
                        </div>
                    </div>
                </div>

                
             <div className="mt-1 text-center">
                <NavLink to="/Prepayment" className="btn btn-primary btn-apply">Continue</NavLink>
            </div>
                
                        
            </div>
            {/** Ending of Container **/}     




        </div>
    );
  }
}

export default Preselect;
