import React, { Component } from 'react';
import profile1 from '../images/profiles/profile1.png';
import profile2 from '../images/profiles/profile2.png';
import profile3 from '../images/profiles/profile3.png';
import profile4 from '../images/profiles/profile4.png';


import '../css/Team.css';

import Footer from "./Footer";



class Team extends Component {
  render() {
    return (
      
        <div>

          
          {/*** Beginning of Team Component       ***/}
          <div class="container c-spacing">
             
            <div className="row text-center featurette-heading div-format"> Meet the Flekk Team
            </div>
            
            {/*** Div for all Cards       ***/}
            <div class="row">
            
                {/*** Founder Card        ***/}
                <div class="card-deck col-lg-6 col-md-6 col-sm-6 text-center">
                  <div class="card text-center box-shadow">
                    <img class="card-img-top circle-image" src={profile1} alt="Card"/>
                    <div class="card-body">
                      <h5 class="card-title">Leopoldo Benavides</h5>
                      <h6 class="card-title card-color featurette-heading"><b>CEO & Founder</b></h6>
                      <p class="card-text lead"> After graduating from Harvard with a Master's degree, Leopoldo founded Flekk in 2018. He has previous corporate finance and M&A experience at USI Insurance, Morgan Stanley, and GE. Leopoldo is a self-taught programmer.</p>
                      <a href="mailto:lbenavides@flekk.io?subject=insurance on Fleek"><i class="fa fa-lg fa-envelope"></i></a>
                      <a href="https://twitter.com/lbenavides23" target="_blank" rel="noopener noreferrer"><i class="fa fa-lg fa-twitter"></i></a> 
                      <a href="https://www.linkedin.com/in/lbenavides" target="_blank" rel="noopener noreferrer"><i class="fa fa-lg fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
         
                {/*** Intern Card        ***/}
                <div class="card-deck col-lg-6 col-md-6 col-sm-6 text-center">
                  <div class="card text-center box-shadow">
                    <img class="card-img-top circle-image" src={profile2} alt="Card"/>
                    <div class="card-body">
                      <h5 class="card-title">Sonia Zeng</h5>
                      <h6 class="card-title card-color featurette-heading"><b>Analyst, Intern</b></h6>
                      <p class="card-text lead"> Sonia is currently attending Barnard College in New York, NY and majoring in Economics and Mathematics. At Flekk, she is currently assisting in implementing company's capital raising strategy by analyzing the insureTech landscape (angel investors, seed, and venture capital).</p>
                    <a href="mailto:szeng@flekk.io?subject=insurance on Fleek"><i class="fa fa-lg fa-envelope"></i></a>
                    <a href="/"><i class="fa fa-lg fa-twitter"></i></a> 
                    <a href="/"><i class="fa fa-lg fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
         
                
                 {/*** Intern Card        ***/}
                <div class="card-deck col-lg-6 col-md-6 col-sm-6 text-center">
                  <div class="card text-center box-shadow">
                    <img class="card-img-top circle-image" src={profile3} alt="Card"/>
                    <div class="card-body">
                      <h5 class="card-title">Amanda Clark</h5>
                      <h6 class="card-title card-color featurette-heading"><b>Analyst, Intern</b></h6>
                      <p class="card-text lead"> Amanda is currently attending the University of Connecticut in Mansfield, CT and studying Economics and Consumer Behavior. At Flekk, she is currently assisting in implementing company's growth, outreach, and support strategy through accerlator and inclubator for startups.</p>
                    <a href="mailto:aclark@flekk.io?subject=insurance on Fleek"><i class="fa fa-lg fa-envelope"></i></a>
                    <a href="/"><i class="fa fa-lg fa-twitter"></i></a> 
                    <a href="/"><i class="fa fa-lg fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
         
                
                 {/*** Intern Card        ***/}
                <div class="card-deck col-lg-6 col-md-6 col-sm-6 text-center">
                  <div class="card text-center box-shadow">
                    <img class="card-img-top circle-image" src={profile4} alt="Card"/>
                    <div class="card-body">
                      <h5 class="card-title">Oscar Lin</h5>
                      <h6 class="card-title card-color featurette-heading"><b>Analyst, Intern</b></h6>
                      <p class="card-text lead"> Oscar is currently attending Indiana University, Kelley School of Business in Bloomington, IN and majoring in Business. At Flekk, he is currently assisting in implementing company's financial growth and marketing strategy and supporting the team's outreach and capital raising strategy.</p>
                    <a href="mailto:olin@flekk.io?subject=insurance on Fleek"><i class="fa fa-lg fa-envelope"></i></a>
                    <a href="/"><i class="fa fa-lg fa-twitter"></i></a> 
                    <a href="/"><i class="fa fa-lg fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                
                
          </div>
      </div>
        
        
        
        {/*** Footer Component        ***/}

          <Footer />


        {/*** End of Team Component       ***/}
        </div>
    );
  }
}

	
export default Team;
