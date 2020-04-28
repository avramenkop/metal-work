$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
  });

  let deg = 0;
  $(window).on("mousewheel", function (event) {
    if (event.originalEvent.wheelDelta >= 0) {
      deg = deg + 1;
      $(".gear").css("transform", `rotate(${deg}deg)`);
    } else {
      deg = deg - 1;
      $(".gear").css("transform", `rotate(${deg}deg)`);
    }
  });


  $(".burger-icon-wrapper").on("click", function () {
    $(".nav-mobile").toggleClass("active");
    $(".burger-icon").toggleClass("active");
  });

  $(".magnifier").on("click", function () {
    $(".magnifier").css("visibility", "hidden");
    $(".header__search").toggleClass("active");
  });

  $(".arrow-btn").on("click", function (event) {
    if ($(".languages.dropdown").css("display") === "none") {
      $(".languages.dropdown").css("display", "block");
    } else if ($(".languages.dropdown").css("display") === "block") {
      $(".languages.dropdown").css("display", "none");
    } 
  });

  $(window).on("click", function (event) {
    if ($(".languages.dropdown").css("display") === "block" && !$(".arrow-btn").is(event.target)) {
      $(".languages.dropdown").css("display", "none");
    }
  });


  let img = $(".languages img");
  for (let i = 0; i < img.length; i++) {
    $(img[i]).on("click", function (event) {
      let oldSrc = $(img[0]).attr("src");
      $(img[0]).attr("src", $(event.target).attr("src"));
      $(event.target).attr("src", oldSrc);
      $(".languages.dropdown").css("display", "none");
    });
  }

  $(".lang__item img").on("click", changeLang);
  function changeLang() {
    let lang = $(".lang__item img");

    for (let i = 0; i < lang.length; i++) {
      if ($(lang[i]).hasClass("active")) {
        $(lang[i]).removeClass("active");
        $(event.target).addClass("active");
        break;
      }
    }
  }
});
