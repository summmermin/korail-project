var slidesB = document.querySelector(".slides_B"),
  slideB = document.querySelectorAll(".slides_B li"),
  currentIdxB = 0,
  slideBCount = slideB.length,
  slideBWidth = 333,
  slideBMargin = 10,
  moveAmtB = slideBWidth + slideBMargin,
  maxSlidesB = 6,
  newBslide,
  prevBBtn = document.querySelector(".controlsB .prevB"),
  nextBBtn = document.querySelector(".controlsB .nextB");
nextBBtn.addEventListener("click", function () {
  //다음 버튼 눌렀을때
  if (currentIdxB <= slideBCount - 1) {
    //슬라이드이동
    slidesB.style.left = -(currentIdxB + 2) * (slideBWidth + slideBMargin) + "px";
    slidesB.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (currentIdxB === slideBCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slidesB.style.left = -(slideBWidth + slideBMargin) + "px";
      slidesB.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdxB = -1;
  }
  currentIdxB += 1;
});
prevBBtn.addEventListener("click", function () {
  //이전 버튼 눌렀을때
  if (currentIdxB >= 0) {
    slidesB.style.left = -currentIdxB * (slideBWidth + slideBMargin) + "px";
    slidesB.style.transition = `${0.5}s ease-out`;
  }
  if (currentIdxB === 0) {
    setTimeout(function () {
      slidesB.style.left = -slideBCount * (slideBWidth + slideBMargin) + "px";
      slidesB.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdxB = slideBCount;
  }
  currentIdxB -= 1;
});
//복사본 생성
for (var cl = 0; cl < maxSlidesB; cl++) {
  var cloneBSlide = slideB[cl].cloneNode(true);
  cloneBSlide.classList.add("cloneb");
  slidesB.appendChild(cloneBSlide);
}
for (var cl = slideBCount - 1; cl >= 0; cl--) {
  var cloneBSlide = slideB[cl].cloneNode(true);
  cloneBSlide.classList.add("cloneb");
  slidesB.prepend(cloneBSlide);
}
//가로배열
function slideBLayout(sww, smm) {
  newBslide = document.querySelectorAll(".slides_B li");
  moveAmtB = sww + smm;
  newBslide.forEach(function (itemb, indexb) {
    itemb.style.left = moveAmtB * indexb + "px";
    itemb.style.width = sww + "px";
  });
}
slideBLayout(slideBWidth, slideBMargin);
//중앙배치
function setBSlide() {
  var ulMoveBAmt = -slideBCount * moveAmtB + "px";
  slidesB.style.transform = "translateX(" + ulMoveBAmt + ")";
  slidesB.classList.add("animated");
}
setBSlide();
