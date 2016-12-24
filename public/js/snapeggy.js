$(function() {
  Snap.load("/svg/egghead.svg", function() {

    var lefteye = Snap.select('#left_eye');
    var righteye = Snap.select('#right_eye');

    function blinkingeyes() {
      lefteye.animate({ transform: 'scaleX(1.3, 0.1)' }, 300, mina.ease, function() {
        lefteye.animate({ transform: 'scaleX(1, 1)' }, 300, mina.ease)
      });

      righteye.animate({ transform: 'scaleX(1.3, 0.1)' }, 300, mina.ease, function() {
        righteye.animate({ transform: 'scaleX(1,1)' }, 300, mina.ease)
      });
    }
    setInterval(blinkingeyes, 3000);

  });
});