$(function () {
  /**
   * 1. 변수 선언
   **/
  var visualWrap = $("#brandVisual"),
    slide = visualWrap.find(".visual_slide>li"),
    slideCount = slide.length,
    stopTimer,
    leftBtn = visualWrap.find(".btnImg>.prev"),
    rightBtn = visualWrap.find(".btnImg>.next"),
    pager = visualWrap.find(".buttonList>li"),
    current = 0;

  /* **
  2. 슬라이드 위치 설정
  * */
  var slidePos = slide.each(function (i) {
    $(this).css("left", i * 100 + "%");
  });

  timer();

  /**
   * autoplay 함수
   **/
  function timer() {
    stopTimer = setInterval(function () {
      var prev = slide.eq(current); //0
      move(prev, 0, "-100%");
      var prevPager = pager.eq(current);
      prevPager.removeClass("on");
      current++; //1
      if (current == slideCount) {
        current = 0;
      }
      var next = slide.eq(current); //1
      move(next, "100%", "0%");
      var nextPager = pager.eq(current);
      nextPager.addClass("on");
    }, 3000);
  }

  /**
   * 슬라이드 애니메이트
   * * */
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000);
  }

  //
  // 마우스오버시 슬라이드정지
  // 
  // visualWrap.hover(
  //   function () {
  //     $(this).addClass("on");
  //     clearInterval(stopTimer);
  //   },
  //   function () {
  //     $(this).removeClass("on");
  //     timer();
  //   }
  // );

}); //jQuery
