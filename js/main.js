function slowScroll(id) {
  $("html,body").animate(
    {
      scrollTop: $(id).offset().top - 30,
    },
    500
  );
  return false;
}
$(".header-top .menu").on("click", function () {
  if ($("header .mobile-menu").is(":visible"))
    $(this).html('<i class="fa-sharp fa-solid fa-bars"></i>');
  else $(this).html('<i class="fa-solid fa-xmark"></i>');

  $("header .mobile-menu").slideToggle();
});

$("#subscribe").bind("click", () => {
  let email = $("#email").val().trim();
  if (email.split("@").length != 2 || email.split(".").length != 2) {
    $("#sub_form label").text("Вы ввели неверный email");
    $("#sub_form label").fadeIn();
  }

  setTimeout(() => {
    $("#sub_form label").fadeOut();
  }, 2000);
});
$(".centred .video-play, #modal-video .close-button").on("click", () => {
  $("#modal-video").toggle();
  $("body").toggleClass("overflow-hidden");
  resizeVideo();
});

$(window)
  .on("resize", () => {
    resizeVideo();
  })
  .resize();

function resizeVideo() {
  $("iframe").each(() => {
    let width = $(this).width();
    $(this).css("height", width / 1.77 + "px");
  });
}
