const tabList = document.querySelectorAll(".tab_menu .list li");
const contents = document.querySelectorAll(".tab_menu .cont_area .cont");
let activeCont = "";

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");

      contents[j].style.display = "none";
    }

    this.parentNode.classList.add("is_on");

    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  });
}



//슬라이드 추가
const slides = document.querySelector('.slides'); 
const slideImg = document.querySelectorAll('.slides li');
let currentIdx = 0; 
const slideCounts = slideImg.length; 
const preva = document.querySelector('.prev'); 
const nexta = document.querySelector('.next'); 
const slideWidth = 300; 
const slideMargin = 100; 

function moveSlide(num) {
  slides.style.left = -num * 400 + 'px';
  currentIdx = num;
}

preva.addEventListener('click', function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

nexta.addEventListener('click', function () {
  if (currentIdx !== slideCounts - 1) {
    moveSlide(currentIdx + 1);
  }
});

    //자동슬라이드
    var timer = undefined;
    var slideWrapper = document.querySelector('.slideShow');

    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1);
            }, 3000);
        }
    }
    autoSlide();