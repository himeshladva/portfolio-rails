$(document).ready(function () {
  var Initialize = {
    init: function () {
      // PageFade.init();
      SetHeight.init();
    }
  }

  var PageFade = {
    init: function () {
      $(".content-wrapper").css("display", "none");
      $(".content-wrapper").fadeIn(200);

      $('.nav a').click(function (e) {
        var redirect = $(this).attr('href');
        e.preventDefault();
        $('.content-wrapper').fadeOut(200, function (){
          document.location.href = redirect;
        });
      });
    }
  };

  var SetHeight = {
    init: function () {
      this.resize();
      var self = this;
      $(window).resize(function() {
        self.resize();
      });
    },
    resize: function () {
      var height = $(window).height() - 130;
      $('.content').height(height);
      $('.sidebar').height(height);
    }
  };

  Initialize.init();
});
