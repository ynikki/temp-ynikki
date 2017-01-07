$(function() {
  var sliderCount = $('#slider ul li').length;
  var sliderWidth = $('#slider ul li').width();
  var sliderHeight = $('#slider ul li').height();
  var sliderUlWidth = sliderCount * sliderWidth;

  $('#slider').css({ "width": "sliderUlWidth", "marginLeft": "- sliderWidth" });
  $('#slider ul').css({ "width": "sliderUlWidth", "marginLeft": "- sliderWidth" });
  $('#slider ul li:first-child').prependTo('#slider ul');

  function goLeft() {
    $('#slider ul').animate({ "left": "+ sliderWidth"}, 200, function() {
      $('#slider ul li: last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  function goRight() {
    $('#slider ul').animate({ "left": "- sliderWidth" }, 200, function() {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  $('a.left').click(function() {
    goLeft();
  });

  $('a.right').click(function() {
    goRight();
  });
});