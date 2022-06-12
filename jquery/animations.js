jQuery(function ($) {
  // Function which adds the 'animated2' class to any '.animatable2' in view
  var doAnimations = function () {
    // Calc current offset and get all animatable2s
    var offset = $(window).scrollTop() + $(window).height(),
      $animatable2s = $(".animatable2");

    // Unbind scroll handler if we have no animatable2s
    if ($animatable2s.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatable2s and animate them if necessary
    $animatable2s.each(function (i) {
      var $animatable2 = $(this);
      if ($animatable2.offset().top + $animatable2.height() - 20 < offset) {
        $animatable2.removeClass("animatable2").addClass("animated2");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});

jQuery(function ($) {
  // Function which adds the 'animated' class to any '.animatable2' in view
  var doAnimations = function () {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});
