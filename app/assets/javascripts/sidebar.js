var toggleSidebar = {
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
    $('.content-container').stop().animate({'padding-right': '0'}, 500);
    $('.content').stop().animate({'margin': '0 20px'}, 500);
    $('.sidebar-open').stop().fadeIn(800);
    $('.sidebar-close').stop().fadeOut(500);
  },

  showSidebar: function () {
    $('.sidebar-container').stop().animate({'margin-right': '0px'}, 500);
    $('.content-container').stop().animate({'padding-right': '275px'}, 500);
    $('.content').stop().animate({'margin': '0 10px 0 20px'}, 500);
    $('.sidebar-open').stop().fadeOut(300);
    $('.sidebar-close').stop().fadeIn(500);
  }
};