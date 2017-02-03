$(function () {

  $('.slide').hide();
  $('.current').show();
 
  function goNext(){
     $('.current').addClass("before").removeClass("current");
        if($(".before").is(":last-child")){         
          $('.slide').first().addClass("current");
        }else{
           $(".before").next().addClass("current");          
        }
    
    $('.active').addClass("c-before").removeClass("active");    
      if($('.c-before').is(":last-child")){
        $('.nav-icons').first().addClass("active")        
      }else{
       $('.c-before').next().addClass("active");
      }

      $('.c-before').removeClass("c-before");    
      $('.before').fadeOut(200);
      $('.current').fadeIn(200);
      $('.before').removeClass("before");
    
  }
  function goPrev(){
     $('.current').addClass("before").removeClass("current");
        if($(".before").is(":first-child")){         
          $('.slide').last().addClass("current");
        }else{
           $(".before").prev().addClass("current");          
        }
    
    $('.active').addClass("c-before").removeClass("active");
    
      if($('.c-before').is(":first-child")){
        $('.nav-icons').last().addClass("active")
        
      }else{
       $('.c-before').prev().addClass("active");
      }
    
      $('.c-before').removeClass("c-before")    
      $('.before').fadeOut(200);
      $('.current').fadeIn(200);
      $('.before').removeClass("before");
    
  }
  function getByIndex(){
       var index = Number($(this).index()) + 1;
      $('.current').addClass("before").removeClass("current");
       $('.slide:nth-child('+ index +')').addClass("current");
      
       $('.active').removeClass("active");
       $('.nav-icons:nth-child('+ index +')').addClass("active");  
       $('.before').fadeOut(200);
       $('.current').fadeIn(200);
       $('.before').removeClass("before");     
  }
  
  $(".prev").on('click', goNext);
  $(".next").on('click', goPrev);
  
  $('.nav-icons').on('click', getByIndex); 
  
});