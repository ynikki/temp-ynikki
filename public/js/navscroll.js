$(function() {

  var $nav = $('#nav-center');
  var posTop = $nav.position().top;

  $(window).scroll(function() {
    var y = $(this).scrollTop();
    if( y > posTop) {
      $nav.addClass('sticky-header');
    } else {
      $nav.removeClass('sticky-header');
    }
  });

});