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
      var height = $(window).height() - 130;
      $('.content').height(height);
      $('.sidebar').height(height);
    }
  };

  var ToggleSidebar = {
    init: function () {
      var self = this;

      $('.sidebar:visible').click(function () {
        self.hideSidebar();
      });

      $('.content').click(function () {
        self.showSidebar();
      });
    },

    hideSidebar: function () {
      $('.sidebar-container').animate({'margin-right': '-500px'}, 500);
      $('.content-container').animate({'width': '100%'}, 500);
      $('.content').animate({'margin': '0 20px'}, 500);
    },

    showSidebar: function () {
      $('.sidebar-container').animate({'margin-right': '0px'}, 500);
      $('.content-container').animate({'width': '80%'}, 500);
      $('.content').animate({'margin': '0 10px 0 20px'}, 500);
    }
  };

  Initialize.init();
});
