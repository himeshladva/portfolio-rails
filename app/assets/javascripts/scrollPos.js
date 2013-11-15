var scrollPos = {
  init: function () {
    // SHADOW
    this.resize([$('header.masthead')], 'shadow', 10);

    // SMALL HEADER
    this.resize([$('header.masthead'), $('header .logo')], 'small', 300);
  },

  resize: function (el, newClass, desiredPos) {
    var self = this;

    $(window).scroll(function () {
      if (self.isMobile()) {
        for (var i in el) {
          var currentPos = $(this).scrollTop();
          if (currentPos > desiredPos) {
            el[i].addClass(newClass);
          } else {
            el[i].removeClass(newClass);
          }
        }
      }
    });
  },

  isMobile: function () {
    return ($(window).width() > 480);
  }
};
