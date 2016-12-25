$(function() {
  var s_egg = Snap("#eggy");

  Snap.load("/svg/egghead.svg", function(f) {
    lefteye = f.selectAll("#left_eye");
    righteye = f.selectAll("#right_eye");
    s_egg.append(f);

    function blinkingeyes() {
      lefteye.animate({ transform: 'scaleX(1.3, 0.1)' }, 300, mina.ease, function() {
        lefteye.animate({ transform: 'scaleX(1, 1)' }, 300, mina.ease)
      });

      righteye.animate({ transform: 'scaleX(1.3, 0.1)' }, 300, mina.ease, function() {
        righteye.animate({ transform: 'scaleX(1,1)' }, 300, mina.ease)
      });
    }
    setInterval(blinkingeyes, 1000);
  });
});