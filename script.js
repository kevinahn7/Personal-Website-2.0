$(document).ready(function() {
  $("img").on("click", function() {
    alert("No real projects yet...");
  });

  $('#contact-scroll-to').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 500);
    return false;
  });
});
