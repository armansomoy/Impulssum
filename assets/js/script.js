$(function () {
  'use strict';

  //navbar fixed
  window.addEventListener("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 200) {
      $("#header").addClass("sticky");
    } else {
      $("#header").removeClass("sticky");
    }
  });

  // bottom To top
  window.addEventListener("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll > 700) {
      $(".bottomToTop").show();
    } else {
      $(".bottomToTop").hide();
    }
  });


  // WoW Js
  var wow = new WOW({
    offset: 2,
    mobile: false
  })
  wow.init();

});