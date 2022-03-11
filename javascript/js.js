// Menu button
$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle",
        });
      });
    });
  });
// if you want to change color of navbar so un comment
// var a = $("nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > 100)
    {   
       $('nav').css({"background":"rgb(250 204 21)",
       "transition-timing-function":" ease-in-out ",
       "transition-duration": ".4s",
       "transition-delay": ".1.2s"
    });
    } else {
       $('nav').css({"background":"#000"});
    }
});
AOS.init();
