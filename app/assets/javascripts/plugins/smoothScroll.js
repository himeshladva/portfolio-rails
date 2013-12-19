var smoothScroll = {
  init: function () {
    var self = this;
    $('a[href*=#]:not([href=#])').click(function() {
      var startScroll = self.doScroll(this);
      startScroll();
    });
  },

  doScroll: function (el) {
    var self = this;
    return function () {
      if (location.pathname.replace(/^\//,'') == el.pathname.replace(/^\//,'') && location.hostname == el.hostname) {
        var target = $(el.hash);
        target = target.length ? target : $('[name=' + el.hash.slice(1) +']');
        if (target.length) {
          speed = self.setSpeed(target)();
          $('html,body').animate({
            scrollTop: target.offset().top
          }, speed);
          event.preventDefault();
        }
      }
    };
  },

  setSpeed: function (target) {
    return function () {
      return (target[0].name == "top") ? 550 : 750;
    };
  }
};
