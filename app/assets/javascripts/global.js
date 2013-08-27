$(document).ready(function () {
  var Initialize = {
    init: function () {
      // PageFade.init();
    }
  }

  var PageFade = {
    init: function () {
      $(".content-container").css("display", "none");
      $(".content-container").fadeIn(200);

      $('.nav a').click(function (e) {
        var redirect = $(this).attr('href');
        e.preventDefault();
        $('.content-container').fadeOut(200, function (){
          document.location.href = redirect;
        });
      });
    }
  };

  Initialize.init();
});
