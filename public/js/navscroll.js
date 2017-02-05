$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 200) {
      $('.banner-photo').addClass("nav-fix");
    } else {
      $('.banner-photo').removeClass("nav-fix");
    }
  });

});