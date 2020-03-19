document.addEventListener("DOMContentLoaded", function() {
// autoclose mobile menu on click to link
  $(".navbar-collapse a, .navbar-brand").click(function() {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var header = $('.header').height() + 50;

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-header
        }, 1000);
        return false;
      }
    }
  });

  $(".fancybox").fancybox({
  });

});
