import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Checkout.css';


import ccvisa from '../images/icons-fontawesome/cc-visa.svg';
import ccamex from '../images/icons-fontawesome/cc-amex.svg';
import ccmastercard from '../images/icons-fontawesome/cc-mastercard.svg';
import ccdiscover from '../images/icons-fontawesome/cc-discover.svg';


class Checkout extends Component {
  

  render() {
  
    return (
        <div>
        
            <div className="container pyp-contr">
            <div className="row justify-content-md-center">
                
                      <form className="cc-pymt-div">
                          <div class="bczc">
                          
                              <h3 className="mt-3 text-center">Payment</h3>
                              <h5 className="mt-3 text-center">Accepted Cards</h5>
                              <div className="mt-3 text-center">
                                  <img src={ccvisa} class="cc-pymt"></img>
                                  <img src={ccamex} class="cc-pymt"></img>
                                  <img src={ccmastercard} class="cc-pymt"></img>
                                  <img src={ccdiscover} class="cc-pymt"></img>
                              </div>
                          <div className="row mt-3">
                              <div className="mb-2">
                                  <label for="cname">Name on Cardholder</label>
                                  <input type="text" id="cname" className="cc-pyment-input" name="cardname" placeholder="John More Doe" />
                              </div>
                        </div>
                         <div className="row mt-3">
                               <div className="mb-2">
                                  <label for="ccnumm">Credit card number</label>
                                  <input type="text" id="ccnumm" name="cardnumber" className="cc-pyment-input" placeholder="1111-2222-3333-4444" />
                              </div>
                              
                          </div>
                          
                          
                        <div className="row mt-2">
                              <div className="mb-2">    
                                  <label for="expmonth">Exp MM/YY</label>
                                  <input type="text" id="expmonth" name="expmonth" className="cc-pyment-input sdvcl" placeholder="00/00" />
                              </div>
                        </div>
                        
                        <div className="row mt-2">
                              <div className="mb-2">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" className="cc-pyment-input  sdvcl" placeholder="352" />
                              </div>
                        </div>
                        
                        <div class="custom-control custom-checkbox mt-2 mb-4 jdn">
                              <input type="checkbox" class="custom-control-input" id="save-info" />
                              <label class="custom-control-label" for="save-info">Save this information for next time</label>
                              
                              <NavLink to="/Validatepw" className="btn btn-success ldf mt-4">Secure Payment</NavLink>
                        </div>
                
              
                          </div>
                          
                              
          
            
                      </form>
                      
                      
                      
                      
                      
                      
                   
      </div>
   
      </div>

      </div>
    );
  }
}

export default Checkout;
