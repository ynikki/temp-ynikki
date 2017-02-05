$(function() {

  $('.slide').hide();
  $('.current').show();
  $('.description').hide();
  $('.now').show();
 
  function goNext(){
   $('.current').addClass("before").removeClass("current");
    if($(".before").is(":last-child")) {         
      $('.slide').first().addClass("current");
    } else {
       $(".before").next().addClass("current");          
    }

    $('.now').addClass("d-before").removeClass("now");
    if($('.d-before').is(":last-child")) {
      $('.description').first().addClass("now");
    } else {
      $('.d-before').next().addClass("now");
    }
    
    $('.active').addClass("c-before").removeClass("active");    
    if($('.c-before').is(":last-child")) {
      $('.nav-icons').first().addClass("active")        
    } else {
     $('.c-before').next().addClass("active");
    }

    $('.c-before').removeClass("c-before");

    $('d-before').fadeOut(200);
    $('.now').fadeIn(200);
    $('.d-before').removeClass("d-before");

    $('.before').fadeOut(200);
    $('.current').fadeIn(200);
    $('.before').removeClass("before");
    
  }
  function goPrev(){
   $('.current').addClass("before").removeClass("current");
    if($(".before").is(":first-child")) {         
      $('.slide').last().addClass("current");
    } else {
       $(".before").prev().addClass("current");          
    }
  
    $('.now').addClass("d-before").removeClass("now");
    if($('.d-before').is(":first-child")) {
      $('.description').last().addClass("now");
    } else {
      $('.d-before').prev().addClass("now");
    }
  
    $('.active').addClass("c-before").removeClass("active");
    if($('.c-before').is(":first-child")) {
      $('.nav-icons').last().addClass("active");
      
    } else {
     $('.c-before').prev().addClass("active");
    }

    $('.c-before').removeClass("c-before");

    $('.d-before').fadeOut(200);
    $('.now').fadeIn(200);   
    $('.d-before').removeClass("d-before");

    $('.before').fadeOut(200);
    $('.current').fadeIn(200);
    $('.before').removeClass("before");
    
  }
  function getByIndex(){
    var index = Number($(this).index()) + 1;

    $('.current').addClass("before").removeClass("current");
   $('.slide:nth-child('+ index +')').addClass("current");

   $('.now').addClass("d-before").removeClass("now");
   $('.description:nth-child('+ index +')').addClass("now");

   $('.active').removeClass("active");
   $('.nav-icons:nth-child('+ index +')').addClass("active");  
  
   $('.d-before').fadeOut(200);
   $('.now').fadeIn(200);
   $('.d-before').removeClass("d-before");

   $('.before').fadeOut(200);
   $('.current').fadeIn(200);
   $('.before').removeClass("before");     
  }
  
  $(".prev").on('click', goPrev);
  $(".next").on('click', goNext);
  
  $('.nav-icons').on('click', getByIndex); 
  
});