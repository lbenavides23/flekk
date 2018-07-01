import React, { Component } from 'react';
import $ from "jquery";
import '../css/Form.css';
import '../css/Header.css';



class Form extends React.Component {
    
    constructor(props) {
    super(props);
    }
    
     

    
    handleClick() {
     document.getElementById("x").style.display = "none";
     document.getElementById("y").style.display = "block";
      
    }
   
   
  
  
  render() {
      
      
      
      
      
      
      
    return (
        <div>
              <form className="apply-form">
              
              
                {/** Fieldset #0 **/}
                <fieldset id="x" className="fdset">
                    <h2>Let's get started!</h2>
                    <h3> What is your legal name?</h3>
                    <input placeholder="First Name" id="mytext"/>
                    <input placeholder="Last Name"/>
                    <button
                        className="btn-next"
                        onClick={this.handleClick}
                        >Continue</button>
                </fieldset>
                
                
                {/** Fieldset #1 **/}
              
                <fieldset id="y" className="fdset">
                    <h3> What is your email address?</h3>
                    <input placeholder="Emaill Address"/>
                    <button className="btn-next">Continue</button>
                </fieldset>
                
                
                {/*** Fieldset #2 ***/}
        
                <fieldset id="2" className="fdset">
                    <h3>Which state do you do business in?</h3>
                    <input placeholder="State" />
                    <div>
                        <h4> Sugguestions:</h4>
                        <div>
                            <button>New York</button>
                            <button>Other</button>
                        </div>
                    </div>
                   <button className="btn-next">Continue</button>
                </fieldset>
                
                {/**** Fieldset #3 ****/}
                
                <fieldset id="3" className="fdset">
                    <div>
                        <h2>Unfortunately</h2>
                        <p>We don't provide coverage in your state yet</p>
                    </div>
                    <div>
                        <h3>Open to New Opportunity</h3>
                        <p> We will send you an email when we are in your state</p>
                    </div>
                    <button className="btn-next">Try New York</button>
                </fieldset>


                
                {/***** Fieldset #4 *****/}
                
                <fieldset id="4" className="fdset">
                    <h2>Congrats on completing this section</h2>
                    
                    <button className="btn-next">Continue</button>
                </fieldset>
              
              </form>
      </div>
      
    );
  }
}

export default Form;
