var scrollPos = {
  init: function () {
    var self = this;
    $(window).scroll(function () {
      var toggleShadow = self.resize([$('header.masthead')], 'shadow', 10, 'desktop');
      toggleShadow();

      var toggleShadow = self.resize([$('header.masthead')], 'shadow', 0, 'mobile');
      toggleShadow();

      var toggleHeaderSize = self.resize([$('header.masthead'), $('header .logo'), $('div.nav-container')], 'small', 300, 'desktop');
      toggleHeaderSize();
    });
  },

  resize: function (el, newClass, desiredPos, targetDevice) {
    var self = this;
    return function () {
      if (self.currentDevice()() == targetDevice) {
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

  currentDevice: function (deviceWidth) {
    return function () {
      return ($(window).width() > 480) ? 'desktop' : 'mobile';
    };
  }
};
