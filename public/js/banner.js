$(function() {
  var $root = $('html');
  var $nav_header = $('.banner');
  var header_height = $('.banner').height();
  var hero_height = $('.hero').height();
  var offset_val = hero_height - header_height;
  var eventType = ((document.ontouchstart !== null) ? 'click': 'touchstart');
  var scroll_top = $(window).scrollTop();

  function navSlide() {
    if(scroll_top >= offset_val) {
      $nav_header.addClass('is-sticky');
    } else {
      $nav_header.removeClass('is-sticky');
    }
  };

  function menuToggle() {
    if($nav_header.hasClass('is-open')) {
      $root.removeClass('pinned');
      $root.removeClass('is-open');
    } else {
      $root.addClass('pinned');
      $nav_header.addClass('is-open');
    }
  };

  function openNav() {
    if($nav_header.hasClass('is-open')) {
      $nav_header.removeClass('is-open');
      $root.removeClass('pinned');
    }
  }

  function anchorScroll(event) {
    var id = $(this).attr('href');
    var offset = header_height;
    var target = $(id).offset().top - offset;

    $('.banner').animate({
      scrollTop: target
    }, 500);

    event.preventDefault();
  };

  $('.scrollto').on(eventType, function() {
    anchorScroll.call(this, event);
  });

  $('.banner a').on(eventType, openNav);

  $(window).scroll(navSlide);

});