document.addEventListener("DOMContentLoaded", function() {
// autoclose mobile menu on click to link
  $(".navbar-collapse a").click(function() {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse('hide');
    }
  });

});
