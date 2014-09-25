var instagram = {
  init: function () {
    this.getImages();
  },

  getImages: function () {
    var userFeed = new Instafeed({
      get: 'user',
      userId: '@@tokenise-this@@',
      accessToken: '@@tokenise-this@@',
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
      var current = feed.currentImage;
      var total = feed.images.length;

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
