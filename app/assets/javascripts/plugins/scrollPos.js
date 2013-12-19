var scrollPos = {
  init: function () {
    var self = this;
    $(window).scroll(function () {
      var toggleShadow = self.resize([$('header.masthead')], 'shadow', 10);
      var toggleHeaderSize = self.resize([$('header.masthead'), $('header .logo'), $('div.nav-container')], 'small', 300);

      toggleShadow();
      toggleHeaderSize();
    });
  },

  resize: function (el, newClass, desiredPos) {
    var self = this;
    return function () {
      if (self.isMobile()()) {
        for (var i in el) {
          var currentPos = $(window).scrollTop();
          if (currentPos > desiredPos) {
            el[i].addClass(newClass);
          } else {
            el[i].removeClass(newClass);
          }
        }
      }
    };
  },

  isMobile: function () {
    return function () {
      return ($(window).width() > 480);
    };
  }
};
