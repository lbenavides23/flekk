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
        
            <div className="container">
            <div className="row justify-content-md-center">
                
                      <form className="cc-pymt-div">
                          <div class="bczc">
                          
                          <h3>Payment</h3>
                          <h5>Accepted Cards</h5>
                          <div>
                              <img src={ccvisa} class="cc-pymt"></img>
                              <img src={ccamex} class="cc-pymt"></img>
                              <img src={ccmastercard} class="cc-pymt"></img>
                              <img src={ccdiscover} class="cc-pymt"></img>
                          </div>
                          <div className="row">
                              <div className="col-sm mb-2">
                                  <label for="cname">Name on Cardholder</label>
                                  <input type="text" id="cname" className="cc-pyment-input" name="cardname" placeholder="John More Doe" />
                              </div>
                               <div className="col-sm mb-2">
                                  <label for="ccnumm">Credit card number</label>
                                  <input type="text" id="ccnumm" name="cardnumber" className="cc-pyment-input" placeholder="1111-2222-3333-4444" />
                              </div>
                              
                          </div>
                          <div className="row mt-2">
                              <div className="col-md mb-2">    
                                  <label for="expmonth">Exp MM/YY</label>
                                  <input type="text" id="expmonth" name="expmonth" className="cc-pyment-input" placeholder="00/00" />
                              </div>
                              <div className="col-md mb-2">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" className="cc-pyment-input" placeholder="352" />
                              </div>
                          </div>
                           <div class="custom-control custom-checkbox mt-2 mb-4">
              <input type="checkbox" class="custom-control-input" id="save-info" />
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
                
              
                
                    <NavLink to="/Validatepw" className="btn btn-success">Secure Payment</NavLink>
                          </div>
                          
                              
          
            
                      </form>
                      
                      
                      
                      
                      
                      
                   
      </div>
   
      </div>

      </div>
    );
  }
}

export default Checkout;
