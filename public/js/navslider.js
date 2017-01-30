$(function () {

  var nav = $('.nav-icons');
  var width = 500;
  var slideClick = 300;
  var slides = $('.slider-wrapper');
  var slide = slides.find('.slide');

  nav.on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    slideNum = $(this).data('slide');

    if($(this).hasClass('active')) {
      slides.animate({'margin-left': (nav.length - $(this).data('image')) * width}, slideClick);
    }
  });
});