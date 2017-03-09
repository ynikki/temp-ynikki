$(function() {
  var item, img, title, large_img;
  var CW, CH, CL, CT, hpadding, vpadding, imgtag;
  var lb_loading = false;
  var doc = $(document);
  
  $("#lightbox li").click(function(){
    if((document.documentElement.clientWidth < 600) || (screen.width < 600)) {
      return false;
    }

    if(lb_loading) return false;
      lb_loading = true;

    item = $(this);
    img = item.find("img");
    title = item.find(".title").html();

    $("#lightbox li.now").removeClass("now");
    item.addClass("now");

    large_img = new Image();
    large_img.src = img.attr("data-large") ? img.attr("data-large") : img.attr("src");


    if($(".lb_backdrop").length < 1)
    {
      var lb_backdrop = '<div class="lb_backdrop"></div>';
      var lb_canvas = '<div class="lb_canvas"></div>';
      var lb_previous = '<span class="lb_previous"><</span>';
      var lb_title = '<span class="lb_title"></span>';
      var lb_next = '<span class="lb_next">></span>';
      var lb_controls = '<div class="lb_controls">'+lb_previous+lb_title+lb_next+'</div>';
      var total_html = lb_backdrop+lb_canvas+lb_controls;
      
      $(total_html).appendTo("body");
    }
 
    if($(".lb_backdrop:visible").length == 0)
    {
      $(".lb_backdrop, .lb_canvas, .lb_controls").fadeIn("slow");
    }
    
    if(!large_img.complete) 
      $(".lb_canvas").addClass("loading").children().css("opacity", "0.5")
    
    if(item.prev().length == 0)
      $(".lb_previous").addClass("inactive");
    else
      $(".lb_previous").removeClass("inactive");
    if(item.next().length == 0)
      $(".lb_next").addClass("inactive");
    else
      $(".lb_next").removeClass("inactive");

    CW = $(".lb_canvas").outerWidth();
    CH = $(".lb_canvas").outerHeight();
    CL = ($(window).width() - CW)/2;
    CT = ($(window).height() - CH)/2;
    $(".lb_canvas").css({top: CT, left: CL});
    
    $(large_img).on('load', function(){
      CW = large_img.width;
      CH = large_img.height;

      hpadding = parseInt($(".lb_canvas").css("paddingLeft")) + parseInt($(".lb_canvas").css("paddingRight"));
      vpadding = parseInt($(".lb_canvas").css("paddingTop")) + parseInt($(".lb_canvas").css("paddingBottom"));
      CL = ($(window).width() - CW - hpadding)/2;
      CT = ($(window).height() - CH - vpadding)/2;
      
      $(".lb_canvas").html("").animate({width: CW, height: CH, top: CT, left: CL}, 500, function(){
        imgtag = '<img src="'+large_img.src+'" style="opacity: 0;" />';
        $(".lb_canvas").html(imgtag);
        $(".lb_canvas img").fadeTo("slow", 1);
        $(".lb_title").html(title);
        
        lb_loading= false;
        $(".lb_canvas").removeClass("loading");
      });
    });
  });
  
  doc.on("click", ".lb_previous", function(){ navigate(-1) });
  doc.on("click", ".lb_next", function(){ navigate(1) });
  doc.on("click", ".lb_backdrop", function(){ navigate(0) });
  
  doc.keyup(function(e){
    if($(".lb_backdrop:visible").length == 1)
    {
      //Left
      if(e.keyCode == "37") navigate(-1);
      //Right
      else if(e.keyCode == "39") navigate(1);
      //Esc
      else if(e.keyCode == "27") navigate(0);
    }
  });
  
  function navigate(direction)
  {
    if(direction == -1) // left
      $("#lightbox li.now").prev().trigger("click");
    else if(direction == 1) //right
      $("#lightbox li.now").next().trigger("click");
    else if(direction == 0) //exit
    {
      $("#lightbox li.now").removeClass("now");
      $(".lb_canvas").removeClass("loading");
      $(".lb_backdrop, .lb_canvas, .lb_controls").fadeOut("slow", function(){
        $(".lb_canvas, .lb_title").html("");
      })
      lb_loading = false;
    }
  }
});