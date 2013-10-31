var pageFade = {
  init: function () {
    $(".content-container").hide();
    $(".content-container").fadeIn(200);

    $('.nav a').click(function (e) {
      var redirect = $(this).attr('href');
      e.preventDefault();
      $('.content-container').fadeOut(200, function (){
        document.location.href = redirect;
      });
    });
  }
};