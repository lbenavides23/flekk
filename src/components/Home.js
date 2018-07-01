import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Footer from "./Footer";
import Onboarding from "./Onboarding";
import Jumbotron from "./Jumbotron";
import '../css/Home.css';

import dashboard1 from "../images/home/dashboard1.png";
import dashboard2 from '../images/home/dashboard2.png';
import barbershop from '../images/home/barbershop.jpg';
import designer from '../images/home/designer.jpg';
import handy from '../images/home/handy.jpg';
import general from "../images/icons/general.png";
import commerical from "../images/icons/property.png";
import business from "../images/icons/business.png";
import pencil from "../images/icons/pencil.png";
import file from "../images/icons/file.png";
import insured from "../images/icons/insured.png";


class Home extends Component {
  render() {
    return (
        <div>
        
        <Onboarding />
        
        <Jumbotron />
        
        <div className="home-display">
        
        {/* <!--ICONS --> */}  
          
        <div class="container marketing">

          <div class="row">
            <div class="col-lg-4 col-md-4">
              <img src={general} className="step-ions" alt="protection" />
              <h2 class="featurette-heading">Protection</h2>
              <p className="lead text-muted">Small business lawsuits cost between $3,000 and $150,000.</p>
            </div>
            <div class="col-lg-4 col-md-4">
             <img src={commerical} className="step-ions" alt="accidents" />
              <h2 class="featurette-heading">Accidents</h2>
              <p className="lead text-muted">Customer slip-and-fall accidents cost about $20,000 on average.</p>
            </div>
            <div class="col-lg-4 col-md-4">
              <img src={business} className="step-ions" alt="policies"/>
              <h2 class="featurette-heading">Policies</h2>
              <p className="lead text-muted">Tailored insurance as your successful business grows.</p>
            </div>
          </div>
        </div>  



        
            {/* <!-- Simple Section --> */}
            <div class="container s-section">
              <div class="row featurette">
                
                
                <div class="col-md-7 text-center">
                  <h2 class="featurette-heading simple-text">Insurance <span class="text-muted">on</span> Fleeeeekk!</h2>
                  <p class="lead text-muted">Smalll business and freelancers throughout the Big Apple are insuring their business with Flekk. So should you!.</p>
               <div>   
                  <NavLink to="/Apply" class="btn btn-danger">Get Insured</NavLink>
                   </div>
                </div>
                
                   <div class="col col-md-5 text-center sq-box">
                  <img src={dashboard1} className="dashboard" alt="dashboard"/>
                </div>
                
                
                
              </div>
            </div>
        
        
                
                
                
        {/* <!--ICONS --> */}  
          
        <div class="container marketing">

          <div class="row">
            <div class="col-lg-4  col-md-4">
              <img src={pencil} className="step-ions" alt="apply icon"/>
              <h2 class="featurette-heading">Applying</h2>
              <p className="lead text-muted">No headaches, In seconds, your business could be insured on Flekk.</p>
            </div>
            <div class="col-lg-4  col-md-4">
             <img src={file} className="step-ions" alt="file icon" />
              <h2 class="featurette-heading">Policy</h2>
              <p className="lead text-muted">No paper needed. Have 24-hour access to your policy on Flekk.</p>
            </div>
            <div class="col-lg-4  col-md-4">
              <img src={insured} className="step-ions" alt="insured icon" />
              <h2 class="featurette-heading">Claims</h2>
              <p className="lead text-muted">No fax required. Submit a digital claim about the accident on Flekk.</p>
            </div>
          </div>
        </div>  
        
        
        
        
        

        
        
            {/* <!-- Simple Section --> */}
            
            
            <div class="container simply">
              <div class="row featurette">
                
                
                          
                <div class="col col-md-5 text-center sq-box">
                  <img src={dashboard2} className="db-2" alt="select quote" />
                </div>
              
              
              
                
                <div class="col-md-7 text-center">
                  <h2 class="featurette-heading simple-text">Simple. <span class="text-muted">Easy.</span> Trusted.</h2>
                  <p class="lead text-muted">Flekk's features provide customers an easy platform to buy and manage their insurance needs. So should you!</p>
                  <NavLink to="/Apply" class="btn btn-danger">Get Covered</NavLink>
                </div>
                
      
              </div>
            </div>

        
        
      

          {/* <!-- Small Businesses Section -->  */}  
          
          <div class="container marketing">
              <div class="col-md-12 text-center">
                 <h2 class="featurette-heading simple-text">Flexible <span class="text-muted">Tailored.</span> Reliable.</h2>
                  <p class="lead text-muted">commerical insurance designed for your business needs</p>
                
                
                
              </div>
              <div class="row pic-row">
                <div class="col-lg-4 col-md-4">
                  <img src={designer} class="featurette-image img-fluid mx-auto" alt="designers"/>
                  <div className="sub-title">Designers</div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <img src={barbershop} class="featurette-image img-fluid mx-auto" alt="barbershop"/>
                  <div className="sub-title">Barbershops</div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <img src={handy} class="featurette-image img-fluid mx-auto" alt="freelancers"/>
                  <div className="sub-title">Freelancers</div>
                </div>
              </div>
          </div>




        
          

        
    </div>


          <Footer />


            
        </div>
    );
  }
}

export default Home;
