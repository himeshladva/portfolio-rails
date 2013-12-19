var toggleMenu = {
  init: function () {
    $("div.menu-pull").click(function () {
      event.preventDefault();
      $(".nav-container").slideToggle();
    });
  }
};