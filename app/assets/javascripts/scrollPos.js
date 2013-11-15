var scrollPos = {
  init: function () {
    var self = this;
    $(window).scroll(function () {
      // SHADOW
      self.resize([$('header.masthead')], 'shadow', 10);

      // SMALL HEADER
      self.resize([$('header.masthead'), $('header .logo')], 'small', 300);
    });
  },

  resize: function (el, newClass, desiredPos) {
    if (this.isMobile()) {
      for (var i in el) {
        var currentPos = $(window).scrollTop();
        if (currentPos > desiredPos) {
          el[i].addClass(newClass);
        } else {
          el[i].removeClass(newClass);
        }
      }
    }
  },

  isMobile: function () {
    return ($(window).width() > 480);
  }
};
