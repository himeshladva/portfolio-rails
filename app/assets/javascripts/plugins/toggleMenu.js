var toggleMenu = {
  init: function () {
    var self = this;

    $("div.closed").click(function () {
      $(".nav-container").fadeToggle(100, self.assertClasses($(this)));
    });

    $("nav.small a").click(function () {
      $(".nav-container").hide();
    });
  },

  assertClasses: function ($el) {
    var classList = $el[0].classList;

    if (classList[1] == 'closed') {
      this.menuActive($el);
      return
    }

    if (classList[1] == 'active') {
      this.menuClosed($el);
      return
    }
  },

  menuActive: function ($el) {
    $el.removeClass('closed');
    $el.addClass('active');
  },

  menuClosed: function ($el) {
    $el.removeClass('active');
    $el.addClass('closed');
  }
};