// menu
var clickEventType=((window.ontouchstart!==null)?'click':'touchstart');
$("#js-nav-trigger").on(clickEventType, function() {
  $(this).toggleClass("is_active");
  $("#js-header__nav").toggleClass("is_active");
  $(".body").toggleClass("is_not_scroll");
});
