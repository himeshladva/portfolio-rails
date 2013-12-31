var heroCarousel = {
  init: function () {
    $(".rslides").responsiveSlides(this.options);
  },

  options: {
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
    maxwidth: 1600,
    navContainer: "",
    manualControls: "",
    namespace: "transparent-btns",
    before: function () {},
    after: function () {}
  }
}
