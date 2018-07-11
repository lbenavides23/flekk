import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Apply.css';
import '../javascript/apply.js';


class Apply extends Component {
  

  render() {
  

  
    return (
        <div className="apply-div">
        
            <div className="column">
            
                <div className="row justify-content-md-center">
                    
                    {/***** Beginning of Form  ******/}
                    <form class="form-wrapper">
                            
                            {/***** FIELD SET #1  ******/}
                            <fieldset class="section is-active">
                                <div className="app-min-form">
                                    <h2 className="font-light">Let's get started</h2>
                                    <h5 className="font-light mt-4">What is your emaill address?</h5>
                                    <input type="text" name="email" id="email" className="mt-4 mb-4 input-style"  autocomplete="nope" ></input>
                                </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                            </fieldset>
                            
                            
                            
                            {/***** FIELD SET #2  ******/}
                            <fieldset class="section">
                                <div className="app-min-form">
                                    <h5 className="mb-4">Which state do you do business in?</h5>
                                
                                   <p>
                                        <input type="radio" name="state" id="ny"/>
                                        <label for="ny" className="box-option">New York</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="state" id="nj"/>
                                        <label for="nj" className="box-option">New Jersey</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="state" id="ct"/>
                                        <label for="ct" className="box-option">Connecticut</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="state" id="os"/>
                                        <label for="os" className="box-option">Other State</label>
                                   </p>
                                 </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                            </fieldset>
                              
                              
                              {/***** FIELD SET #3  ******/}
                              <fieldset className="section">
                                <div className="app-min-form">
                                    <h5 className="mb-4">What is your legal name?</h5>
                                    <div className="">
                                          <input type="text" name="firstname" id="firstname" className="input-style" autocomplete="nope" />
                                          <label for="firstname" className="db mt-1 text-muted">First name</label>
                                    </div>
                                    <div className="mt-4">
                                        <input type="text" name="lastname" id="lastname" className="input-style" autocomplete="nope" />
                                          <label for="lastname" className="db mt-1 text-muted">Last name</label>
                                    </div>
                                </div>    
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                                  
                              </fieldset>
                              
                              
                              
                              {/***** FIELD SET #4  ******/}
                               <fieldset class="section">
                                <div className="app-min-form">
                                  <h5 className="mb-4">What is the name of your business?</h5>
                                  <input type="text" name="biz" id="biz" className="mt-4 input-style" autocomplete="nope"></input>
                                </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                              </fieldset>
                            
                              
                                                   
                              {/***** FIELD SET #5  ******/}
                            <fieldset class="section">
                                <div className="app-min-form">   
                                      <h5 className="mb-4">What is your business address?</h5>
                                      
                                      <div className="mt-4 mb-4">
                                          <input type="text" name="address" id="address" className="input-style" autocomplete="nope"></input>
                                          <label for="address" className="db mt-1 text-muted">Street Address</label>
                                      </div>
                                      
                                      <div className="mt-4 mb-4">
                                          <input type="text" name="biz" id="apt" className="input-style" autocomplete="nope"></input>
                                          <label for="apt" className="db mt-1 text-muted">Apt / Suite</label>
                                      </div>
                                      
                                      <div className="mt-4 mb-4">
                                          <input type="text" name="city" id="city" className="input-style" autocomplete="nope"></input>
                                          <label for="city" className="db mt-1 text-muted">City</label>
                                      </div>
                                      
                                      <div className="mt-4">
                                          <input type="number" name="city" id="city" className="input-style" autocomplete="nope"></input>
                                          <label for="city" className="db mt-1 text-muted">Zip Code</label>
                                      </div>
                                </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                              </fieldset>
                              
                              
                                {/***** FIELD SET #6  ******/}
                               <fieldset class="section">
                                    <div className="app-min-form">
                                          <h5 className="mb-4">Does your business rent or own property?</h5>
                                          
                                            <p>
                                                <input type="radio" name="location" id="rent"/>
                                                <label for="rent" className="box-option">Rent</label>
                                           </p>
                                           <p>
                                                <input type="radio" name="location" id="own"/>
                                                <label for="own" className="box-option">Own</label>
                                           </p>
                                    </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                              </fieldset>
                            
                              
                              
                            
                              {/***** FIELD SET #7  ******/}
                               <fieldset class="section">
                                    <div className="app-min-form">
                                          <h5 className="mb-4">What best describes your business's ownership structure? </h5>
                                            <p>
                                                <input type="radio" name="structure" id="indy"/>
                                                <label for="indy" className="box-option">Individual</label>
                                           </p>
                                           <p>
                                                <input type="radio" name="structure" id="ptner"/>
                                                <label for="ptner" className="box-option">Partnership</label>
                                           </p>
                                           <p>
                                                <input type="radio" name="structure" id="lt-ptner"/>
                                                <label for="lt-ptner" className="box-option">Limited Partnership</label>
                                           </p>
                                           <p>
                                                <input type="radio" name="structure" id="llc"/>
                                                <label for="llc" className="box-option">Limited Liability (llc)</label>
                                           </p>
                                           <p>
                                                <input type="radio" name="structure" id="c-profit"/>
                                                <label for="c-profit" className="box-option">Corporation (fp)</label>
                                           </p>
                                </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                              </fieldset>
                            
                            
                            
                                                  
                            {/***** FIELD SET #8  ******/}
                               <fieldset class="section">
                                  <div className="app-min-form">
                                      <h5>Does your business have investors?</h5>
                                      <h6 className="mt-2 mb-4">(not including you)</h6>
                                      
                                        <p>
                                            <input type="radio" name="invty" id="i-yes"/>
                                            <label for="i-yes" className="box-option">Yes</label>
                                       </p>
                                       <p>
                                            <input type="radio" name="invty" id="i-no"/>
                                            <label for="i-no" className="box-option">No</label>
                                       </p>
                                </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                              </fieldset>
                            
                            
                            
                                                                      
                            {/***** FIELD SET #9  ******/}
                               <fieldset class="section">
                                <div className="app-min-form">
                                      <h5 className="mb-4">Does your business have employees?</h5>
                                      
                                        <p>
                                            <input type="radio" name="ee" id="ee-yes"/>
                                            <label for="ee-yes" className="box-option">Yes</label>
                                       </p>
                                       <p>
                                            <input type="radio" name="ee" id="ee-no"/>
                                            <label for="ee-no" className="box-option">No</label>
                                       </p>
                                </div>
                                <div className="mt-1">
                                  <button className="btn btn-primary btn-apply">Continue</button>
                                </div>
                              </fieldset>
                            
                            
                            
                                                
                                                                      
                            {/***** FIELD SET #10  ******/}
                            <fieldset class="section">
                                <div className="app-min-form">
                                  <h5>How many employees you have?</h5>
                                  <h6 className="mt-2 mb-4">(not including you)</h6>
                                  
                                    <p>
                                        <input type="radio" name="ee-num" id="ee-0"/>
                                        <label for="ee-0" className="box-option">0</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="ee-num" id="ee-1"/>
                                        <label for="ee-1" className="box-option">1</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="ee-num" id="ee-2"/>
                                        <label for="ee-2" className="box-option">2</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="ee-num" id="ee-3"/>
                                        <label for="ee-3" className="box-option">3</label>
                                   </p>
                                   <p>
                                        <input type="radio" name="ee-num" id="ee-4"/>
                                        <label for="ee-4" className="box-option">4</label>
                                   </p>
                                </div>
                                <div className="mt-1">
                                    <NavLink to="/Preselect" className="btn btn-primary btn-apply">Continue</NavLink>
                                </div>
                      </fieldset>
                      
                  </form>
                  {/***** END of Form  ******/}
                  
                  
            </div>
                  
        </div>

      </div>
    );
  }
}

export default Apply;
