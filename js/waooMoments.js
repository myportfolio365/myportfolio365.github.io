(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#numberField").val();
  var field4 = $("#descField").val();

  if(field1 == ""){
      alert('Please Fill Your Name');
      document.getElementById("nameField").focus();
      return false;
  }
  if(field2 == ""){
      alert('Please Fill Your Email');
      document.getElementById("emailField").focus();
      return false;
  }
  if(field4 == ""){
      alert('Please Fill Your Message');
      document.getElementById("descField").focus();
      return false;
  }
  $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeeWjZ5ylPZy82HDHbTHOhrTQw3bi9aep_8z4wLgxAkVXPtwg/formResponse",
      data: {"emailAddress": field1, "entry.2005620554": field2, "entry.1166974658": field3, "entry.839337160": field4 },
      type: "POST",
      dataType: "xml",
      success: function(d)
      {
        console.log('Sucessfully submitted Response')
      },
      error: function(x, y, z)
      { 
          alert('Sucessfully submitted Response'); 
      }
  });
  return false;
} 