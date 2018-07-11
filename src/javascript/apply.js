import $ from 'jquery';


$(document).ready(function(){
  
    // onclick function
    $(".btn-apply").click(function(){
    
        // variables 
        var button = $(this);
        
        // current section
        var currentSection = button.parents(".section");
        
        // current section index
        var currentSectionIndex = currentSection.index();
        
        // progress bar linked to section
        //var headerSection = $('.steps li').eq(currentSectionIndex);
        
        // amend
        currentSection.removeClass("is-active").next().addClass("is-active");
        //headerSection.removeClass("is-active").next().addClass("is-active");
    
        
    
        // function reset to the beginning
        $(".form-wrapper").submit(function(e) {
          e.preventDefault();
            });
    
     
        
        
      });
  
  
  
  
  
  /**********************
  *
  AUTO COMPLETE
  *
  *********************/
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
});
