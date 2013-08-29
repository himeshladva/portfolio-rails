$(document).ready(function () {
  var Initialize = {
    init: function () {
      // PageFade.init();
      SetHeight.init();
      ToggleSidebar.init();
    }
  }

  var PageFade = {
    init: function () {
      $(".content-container").hide();
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

  var SetHeight = {
    init: function () {
      this.resize();
      var self = this;
      $(window).resize(function() {
        self.resize();
      });
    },

    resize: function () {
      var subtract;
      if ($(window).width() < 481) {
        subtract = 105;
      } else {
        subtract = 130;
      }

      var height = $(window).height() - subtract;
      $('.content').height(height);
      $('.sidebar').height(height);
    }
  };

  var ToggleSidebar = {
    init: function () {
      var self = this;

      $('.sidebar-close').click(function () {
        self.hideSidebar();
      });

      $('.sidebar-open').click(function () {
        self.showSidebar();
      });
    },

    hideSidebar: function () {
      $('.sidebar-container').stop().animate({'margin-right': '-500px'}, 500);
      $('.content-container').stop().animate({'width': '100%'}, 500);
      $('.content').stop().animate({'margin': '0 20px'}, 500);
      $('.sidebar-open').stop().fadeIn(500);
      $('.sidebar-close').stop().fadeOut(500);
    },

    showSidebar: function () {
      $('.sidebar-container').stop().animate({'margin-right': '0px'}, 500);
      $('.content-container').stop().animate({'width': '80%'}, 500);
      $('.content').stop().animate({'margin': '0 10px 0 20px'}, 500);
      $('.sidebar-open').stop().fadeOut(500);
      $('.sidebar-close').stop().fadeIn(500);
    }
  };

  Initialize.init();
});
