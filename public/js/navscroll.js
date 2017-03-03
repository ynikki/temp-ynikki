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
        // $(this).addClass('center-active');

        nav.find('a[href="/'+ location.pathname.split("/")[1] +'"]').addClass('center-active');
      }
      onScroll();
    });
  });


  nav.find('a').on('click', function() {
    var $el = $(this);
    var id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500)

    return false;
  });

  ////// For the Index Page ///////
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('center-active');
    });

    $(this).addClass('center-active');

    var target = this.hash;
    var menu = target;

    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $('#nav-center a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if(refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#nav-center ul li a').removeClass('center-active');

        currLink.addClass('center-active');
      } else {
        currLink.removeClass('center-active');
      }
    });
  }

  $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
  });

  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active-toggle');
  });

});