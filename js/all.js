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
