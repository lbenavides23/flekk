import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Prepayment.css';

import shield from '../images/shield.svg';
import plus from '../images/icons-fontawesome/plus-circle.svg';
import caretright from '../images/icons-fontawesome/caret-right.svg';

class Prepayment extends Component {
  

  render() {
  

  
    return (
        <div className="fdvdf">
        
            {/*** Monthly/Yearly Circle Section***/}     
                <div className="container mt-5">
                    <div className="row">
                        <div className="pp-circle pulse">
                            <div className="pp-price text-center">
                                <div className="pp-dr-sign">$</div>
                                <div className="pp-dollar">19</div>
                                <div className="pp-cent">.89</div>
                            </div>
                            <div className="pp-pm-text">Per Month</div>
                            <div className="pp-yr-div">
                                <div className="pp-yr-dr-sign">$</div>
                                <div className="pp-yr-dollar">239</div>
                                <div className="pp-yr-text">Yearly Cost</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            




             {/*** Review and Accept Section***/}    
             
            <div className="container mt-4 sdfsdv">
                <div className="row pp-accept-title mt-4">Review and Accept Insurance Policies & Payment</div>
                <div className="row pp-accept-subtitle mt-3 mb-2">Please check the boxes to confirm:</div>
                 
                 <div className="row pp-checks">   
                    <div>
                        <div>
                        <input type="checkbox" id="pp-check-accept" name="accept" value="accept" />
                        </div>
                        <label for="pp-check-accept" className="pol">I agree to accept delivery of the insurance policy and related documents via email to the address provided to Fleek and agree to consent in electronic transactions.</label>
                    </div>
                 
                    <div>
                        <input type="checkbox" id="pp-check-ack" name="acknowledgement" value="acknowledgement" />
                        <label for="pp-check-ack" className="pol">I have read the information below and confirm it is correct. By checking this box and providing the premium payment I agree that I am entering into a binding agreement with Flekk Insurance Company, Inc.</label>
                    </div>
                 
    
                </div>
            </div>
             


             {/*** Fraud Section***/}    

                <div className="container sdfsdv">
                    
                    <div className="row warning-div mt-3">
                        <div className="pp-fraud-text">Fraud Warning
                        </div>
                        
                        <div className="mt-2 mb-2">Any persion who knowingly and with intent to defraud any insurance company or other person files an application for insurance or statement of claim containing any materially false information, or conceals for the purpose of misleading, information concerning any fact material thereto, commits a fraudulent insurance act, which is a crime, and shall also be subject to a civil penalty not to exceed five thousand dollars and the stated value of the claim for each such violation
                        </div>
                        
                    </div>
                    
                </div>


            {/*** Button Section***/}    
                <div className="container mt-4 sdfsd">
                    <div className="mb-4">
                        <img src={caretright} className="pp-caret-right" />
                        <div className="pp-pdf-link"> View your application information (.pdf)</div>
                    </div>
                    <div className="row  pp-btn-div">
                         <NavLink to="/Checkout" className="btn btn-primary jndcz">Continue</NavLink>
                    </div>
                </div>
                    
    
    </div>
    );
  }
}

export default Prepayment;
