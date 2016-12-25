$(function() {
  var s_egg = Snap("#eggy");
  console.log(s_egg, 's_egg');

  Snap.load("/svg/egghead.svg", function(f) {
    lefteye = f.select("#left_eye");
    righteye = f.select("#right_eye");
    console.log(lefteye, 'hay');
    console.log(righteye, 'bae');

    s_egg.append(lefteye);

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