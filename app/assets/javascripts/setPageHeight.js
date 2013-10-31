var setPageHeight = {
  init: function () {
    this.resize();
    var self = this;
    $(window).resize(function() {
      self.resize();
    });
  },

  resize: function () {
    var subtract;
    if ($(window).width() < 481) {
      subtract = 105;
    } else {
      subtract = 130;
    }

    var height = $(window).height() - subtract;
    $('.content').height(height);
    $('.sidebar').height(height);
  }
};