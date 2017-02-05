$(function() {
  var wrap = $('#wrap');

  wrap.on("scroll", function(e) {
    if(this.scrollTop > 147) {
      wrap.addClass("wrap-fix");
    } else {
      wrap.removeClass("wrap-fix");
    }
  });

});