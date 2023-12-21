function setHeader() {
  if ($(window).scrollTop() > 100) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
}

/* 

	3. Init Header Search

	*/

// function initHeaderSearch() {
//   if ($(".search_button").length) {
//     $(".search_button").on("click", function () {
//       if ($(".header_search_container").length) {
//         $(".header_search_container").toggleClass("active");
//       }
//     });
//   }
// }

//loader
var loader = function () {
  // Show loader
  $("#ftco-loader").addClass("show");

  // Hide loader after document is fully loaded
  window.onload = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1000);
  };
};

loader();
//top going button
document.addEventListener("DOMContentLoaded", function () {
  var mybutton = document.querySelector(".topscroll");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // Function to smoothly scroll to the top
  function scrollToTop() {
    var currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8); // Adjust the divisor for speed control
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", function () {
    scrollToTop();
  });
});
function acceptCookies() {
  // Set a cookie to remember user's choice
  document.cookie =
    "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

  // Hide the cookie banner
  document.getElementById("cookieBanner").style.display = "none";
}

// Check if the user has previously accepted cookies
if (document.cookie.indexOf("cookies_accepted=true") === -1) {
  // Show the cookie banner if not accepted
  document.getElementById("cookieBanner").style.display = "block";
}
console.log(document.cookie);
