$(document).ready(function () {
  var Initialize = {
    init: function () {
      // pageFade.init();
      toggleMenuClass.init();
      // setPageHeight.init();
      // instagram.init();
      scrollPos.init();
      smoothScroll.init();
      toggleMenu.init();

      $(function() {
        $(".rslides").responsiveSlides({
          auto: true,
          speed: 100,
          timeout: 4000,
          pager: true,
          nav: true,
          random: false,
          pause: false,
          pauseControls: true,
          prevText: "Previous",
          nextText: "Next",
          maxwidth: "",
          navContainer: "",
          manualControls: "",
          namespace: "transparent-btns",
          before: function () {},
          after: function () {}
        });
      });
    }
  }

  Initialize.init();
});
