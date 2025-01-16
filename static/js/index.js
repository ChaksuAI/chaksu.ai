window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  // Initialize Image Carousel
  var imageCarouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    threshold: 10
  };
  var imageCarousel = bulmaCarousel.attach('#image-carousel', imageCarouselOptions);

  // Initialize Video Carousel
  var videoCarouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    pauseOnHover: false,
    threshold: 10
  };
  var videoCarousel = bulmaCarousel.attach('#video-carousel', videoCarouselOptions);

  // Hide non-active items after each transition
  function hideNonActiveItems(carouselInstance) {
    carouselInstance.items().each(function(index) {
      if (index !== carouselInstance.index()) {
        $(this).css({
          'visibility': 'hidden',
          'z-index': '0',
          'width': '0'
        });
      } else {
        $(this).css({
          'visibility': 'visible',
          'z-index': '1',
          'width': '100%'
        });
      }
    });
  }

  imageCarousel.on('afterMove.carousel', function(instance) {
    hideNonActiveItems(instance);
    $(window).trigger('resize'); // Force layout recalculation
  });

  videoCarousel.on('afterMove.carousel', function(instance) {
    hideNonActiveItems(instance);
    $(window).trigger('resize'); // Force layout recalculation
  });

  // Initial hiding of non-active items
  hideNonActiveItems(imageCarousel);
  hideNonActiveItems(videoCarousel);

  bulmaSlider.attach();
});