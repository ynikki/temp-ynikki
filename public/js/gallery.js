$(function() {
  $('.image').hide();
  $('.current').show();

  function goNext() {
    $('.current').addClass("before").removeClass("current");
    if($('.current').is(":last-child")) {
      $('.image').first().addClass("current");
    } else {
      $('.before').next().addClass("current");
    }

    $('.before').fadeOut(200);
    $('.current').fadeIN(200);
    $('.before').removeClass("before");
  }

  function goPrev() {
    $('.current').addClass("before").removeClass("current");
    if($('.before').is(":first-child")) {
      $('.image').last().addClass("current");
    } else {
      $('.before').prev().addClass("current");
    }

    $('.before').fadeOut(200);
    $('.current').fadeIn(200);
    $('.before').removeClass("before");
  }

  function createThumbs() {
    for(var i=0; i!=$('.image').length; i++) {
      var src = $('.image:nth-child('+ (i+1) + ') > img').attr('src');
      $('.thumbs').append('<img src="' + src + '"class="thumb">');
    }
  }

  function getIndex() {
    var index = Number($(this).index()) + 1;

    $('.current').addClass("before").removeClass("current");
    $('.image:nth-child('+ index + ')').addClass("current");

    $('.before').fadeOut(200);
    $('.current').fadeIn(200);
    $('.before').removeClass("before");
  }

  createThumbs();
  $('.thumb').on('click', getIndex);
});