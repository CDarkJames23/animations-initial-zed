jQuery(document).ready(function ($) {
  $(".auto-slider").slick({
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: false,
  });
});
