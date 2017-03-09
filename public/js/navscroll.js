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

  var main = $('#nav-center');
  var nav = $('nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    main.each(function() {
      var top = $(this).offset().top - nav_height;
      var bottom = top + $(this).outerHeight();

      if(cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('center-active');

        main.removeClass('center-active');

        nav.find('a[href="/'+ location.pathname.split("/")[1] +'"]').addClass('center-active');
      }
    });
  });


  $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
  });

  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active-toggle');
  });

});