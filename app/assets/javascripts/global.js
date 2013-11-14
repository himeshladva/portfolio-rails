$(document).ready(function () {
  var Initialize = {
    init: function () {
      pageFade.init();
      toggleMenuClass.init();
      // setPageHeight.init();
      // instagram.init();
      navSize.init();
    }
  }

  var navSize = {
    init: function () {
      this.resize([$('header.masthead')], 'shadow', 10);
      this.resize([$('header.masthead'), $('header .logo')], 'small', 300);
    },

    resize: function (el, newClass, desiredPos) {
      $(window).scroll(function () {
        for (var i in el) {
          var currentPos = $(this).scrollTop();
          if (currentPos > desiredPos) {
            el[i].addClass(newClass);
          } else {
            el[i].removeClass(newClass);
          }
        }
      });
    }
  };

  Initialize.init();
});
