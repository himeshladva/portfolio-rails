var toggleMenu = {
  init: function () {
    $("div.menu-pull").click(function () {
      event.preventDefault();
      $(".nav-container").slideToggle();
    });

    $("nav.small a").click(function () {
      console.log('link');
      $(".nav-container").hide();
    });
  }
};