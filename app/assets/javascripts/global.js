$(document).ready(function () {
  var Initialize = {
    init: function () {
      // PageFade.init();
      SetHeight.init();
      ToggleSidebar.init();
      Instagram.init();
    }
  }

  var PageFade = {
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

  var SetHeight = {
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

  var ToggleSidebar = {
    init: function () {
      var self = this;

      $('.sidebar-close').click(function () {
        self.hideSidebar();
      });

      $('.sidebar-open').click(function () {
        self.showSidebar();
      });
    },

    hideSidebar: function () {
      $('.sidebar-container').stop().animate({'margin-right': '-500px'}, 500);
      $('.content-container').stop().animate({'width': '100%'}, 500);
      $('.content').stop().animate({'margin': '0 20px'}, 500);
      $('.sidebar-open').stop().fadeIn(500);
      $('.sidebar-close').stop().fadeOut(500);
    },

    showSidebar: function () {
      $('.sidebar-container').stop().animate({'margin-right': '0px'}, 500);
      $('.content-container').stop().animate({'width': '80%'}, 500);
      $('.content').stop().animate({'margin': '0 10px 0 20px'}, 500);
      $('.sidebar-open').stop().fadeOut(500);
      $('.sidebar-close').stop().fadeIn(500);
    }
  };

  var Instagram = {
    init: function () {
      this.getImages();
    },

    getImages: function () {
      var userFeed = new Instafeed({
        get: 'user',
        userId: 30599352,
        accessToken: '30599352.467ede5.86ebf50346cc47f2a20e34da10048707',
        limit: 100,
        resolution: 'low_resolution',
        template: '<div class="image"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div><div class="caption">{{caption}}</div>',
        mock: true,
        custom: {
          images: [],
          currentImage: 0,
          showImage: function () {
            var image = this.options.custom.images[this.options.custom.currentImage];
            var result = this._makeTemplate(this.options.template, {
              model: image,
              id: image.id,
              link: image.link,
              image: image.images[this.options.resolution].url,
              caption: this._getObjectProperty(image, 'caption.text'),
              likes: image.likes.count,
              comments: image.comments.count,
              location: this._getObjectProperty(image, 'location.name')
            });
            $(".carousel").html(result);
          }
        },
        success: function (json) {
          this.options.custom.images = json.data;
          this.options.custom.showImage.call(this);
        }
      });
      userFeed.run();

      $('.next').click(function () {
        var feed = userFeed.options.custom;
        var current = userFeed.options.custom.currentImage;
        var total = userFeed.options.custom.images.length;

        if (current < total - 1) {
          feed.currentImage++;
        } else {
          feed.currentImage = 0;
        }

        feed.showImage.call(userFeed);
      });

      $('.prev').click(function () {
        var feed = userFeed.options.custom;
        var current = feed.currentImage;
        var total = feed.images.length;

        if (current > 0) {
          feed.currentImage--;
        } else {
          feed.currentImage = total - 1;
        }

        feed.showImage.call(userFeed);
      });
    }
  };

  Initialize.init();
});
