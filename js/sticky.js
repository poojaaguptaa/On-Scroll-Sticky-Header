$(document).ready(function(){
$(window).scroll(function(){
  var sticky = $('.menu'),
      top = $('.logo').height();
      scroll = $(window).scrollTop();

      // check the scroll height and addClass fixed in the header
  if (scroll >= top){ sticky.addClass('fixed container'); $(".web_content").css("padding-top", 2*top);}    // the padding is to set content from same heght from top to the header
  else {sticky.removeClass('fixed container');$(".web_content").css("padding-top",top);}
});
});