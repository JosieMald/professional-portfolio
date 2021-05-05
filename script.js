var nav = [
    $(".nav1"),
    $(".nav2"),
    $(".nav3"),
    $(".nav4"),
    $(".nav5"),
    $(".nav6"),
  ];

  function startImageTransition() {
    var i = 0;
    countdown = setInterval(function () {
      console.log(nav[i]);
      if (i <= 5) {
        nav[i].addClass("animate__fadeInDown");
        i++;
        console.log(i);
      } else clearInterval(countdown);
      return;
    }, 500);
  }
  startImageTransition();