document.addEventListener("DOMContentLoaded", function() {
// autoclose mobile menu on click to link
  $(".navbar-collapse a, .navbar-brand").click(function() {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

});
