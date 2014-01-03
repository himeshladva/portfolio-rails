var scrollPos = {
  init: function () {
    var self = this;
    $(window).scroll(function () {
      var toggleShadow = self.resize({
        elems: [$('header.masthead')],
        newClass: 'shadow',
        desiredPos: 10,
        targetDevice: 'desktop'
      });
      toggleShadow();

      var toggleShadow = self.resize({
        elems: [$('header.masthead')],
        newClass: 'shadow',
        desiredPos: 0,
        targetDevice: 'mobile'
      });
      toggleShadow();

      var toggleHeaderSize = self.resize({
        elems: [$('header.masthead'), $('header .logo'), $('div.nav-container')],
        newClass: 'small',
        desiredPos: 300,
        targetDevice: 'desktop'
      });
      // toggleHeaderSize();
    });
  },

  resize: function (args) {
    var self = this;
    return function () {
      if (self.currentDevice()() == args.targetDevice) {
        for (var i in args.elems) {
          var currentPos = $(window).scrollTop();
          if (currentPos > args.desiredPos) {
            args.elems[i].addClass(args.newClass);
          } else {
            args.elems[i].removeClass(args.newClass);
          }
        }
      }
    };
  },

  currentDevice: function () {
    return function () {
      return ($(window).width() > 480) ? 'desktop' : 'mobile';
    };
  }
};
