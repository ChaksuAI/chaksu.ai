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
    threshold: 10,
    navigation: true, // Enable built-in navigation
  };
  var imageCarousel = bulmaCarousel.attach('#image-carousel', imageCarouselOptions);

  // Initialize Video Carousel
  var videoCarouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    pauseOnHover: false,
    threshold: 10,
    navigation: true, // Enable built-in navigation
  };
  var videoCarousel = bulmaCarousel.attach('#video-carousel', videoCarouselOptions);

  // Hide non-active items after each transition and on initialization
  function hideNonActiveItems(carouselInstance) {
    carouselInstance.items().each(function(index) {
      if (index !== carouselInstance.index()) {
        $(this).addClass('is-hidden');
      } else {
        $(this).removeClass('is-hidden');
      }
    });
  }

  // Attach afterMove event to re-hide non-active items
  imageCarousel.on('afterMove.carousel', function(instance) {
    hideNonActiveItems(instance);
  });

  videoCarousel.on('afterMove.carousel', function(instance) {
    hideNonActiveItems(instance);
  });

  // Initial hiding of non-active items
  hideNonActiveItems(imageCarousel);
  hideNonActiveItems(videoCarousel);
});