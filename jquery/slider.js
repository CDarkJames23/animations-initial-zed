$(".slider").slick({
  dots: false,
  ltl: true,
  infinite: true,
  speed: 300,
  variableWidth: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
