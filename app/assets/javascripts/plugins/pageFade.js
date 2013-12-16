var pageFade = {
  init: function () {
    this.fadeShow();

    $('.nav a').click(function (e) {
      this.fadeRedirect(e);
    });
  },

  fadeShow: function () {
    $(".content-container").hide();
    $(".content-container").fadeIn(200);
  },

  fadeRedirect: function (e) {
    var redirect = $(this).attr('href');
    e.preventDefault();
    $('.content-container').fadeOut(200, function (){
      document.location.href = redirect;
    });
  }
};