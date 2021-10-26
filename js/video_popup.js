
$(document).ready(function(){
  $('.popup_layout').fadeIn(500);

$('.Close_btn').click(function(){
  $('.popup_layout').fadeOut(500);

  setTimeout(function() { 
      $('.video_item > div > iframe').attr("src","none");
  }, 500);

});

});
