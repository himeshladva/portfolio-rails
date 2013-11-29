var toggleMenuClass = {
  init: function () {
    this.addClass();
    var self = this;
    $(window).resize(function () {
      self.removeClass();
      self.addClass();
    });
  },

  addClass: function () {
    if ($(window).width() > 768) {
      $('nav.size').addClass('main');
    } else {
      $('nav.size').addClass('small');
    }
  },

  removeClass: function () {
    $('nav.size').removeClass('main small');
  }
};