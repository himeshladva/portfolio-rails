var smoothScroll = {
  init: function () {
    var self = this;
    $('a[href*=#]:not([href=#])').click(function() {
      self.doScroll(this);
    });
  },

  doScroll: function (el) {
    if (location.pathname.replace(/^\//,'') == el.pathname.replace(/^\//,'') && location.hostname == el.hostname) {
      var target = $(el.hash);
      target = target.length ? target : $('[name=' + el.hash.slice(1) +']');
      if (target.length) {
        var speed = 750;
        if (target[0].name == "top") {
          speed = 550;
        }
        $('html,body').animate({
          scrollTop: target.offset().top
        }, speed);
        event.preventDefault();
      }
    }
  }
};
