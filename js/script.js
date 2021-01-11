menu.onclick = function myFunction() {
  var x = document.getElementById("myTopNav");

  if (x.className === "topNav") {
    x.className += " responsive";
    document.getElementById("colorize").classList.add("back");
  } else {
    x.className = "topNav";
    document.getElementById("colorize").classList.remove("back");
  }
};

$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
        breakpoint: 322,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
    },
  ],
});

$(".autoplay").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
        breakpoint: 322,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
    },
  ],
});
