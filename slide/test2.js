// 3차 visual stroy slick 적용
$(".v-story-slider")
	.slick({
		dots: true,
		draggable: true,
		arrows: true,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: "300px",
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					centerPadding: "20vw",
				},
			},
			{
				breakpoint: 770,
				settings: {
					centerPadding: "0",
					arrows: false,
				},
			},
		],
	})
	.on("beforeChange", function (event, slick, currentSlide, nextSlide) {

		if (currentSlide !== nextSlide) {
			$(".slick-center + .slick-cloned").each(function (index, node) {
				var $node = $(node)
				setTimeout(function () {
					$node.addClass("slick-current")
					$node.addClass("slick-center")
				})
			})
		}
	}) // 이 코드는 slick infinite 가 맨끝에서 다시 처음으로 돌아가거나 할때도 트랜지션이 적용되기 위한 코드입니다. (centerMode 에서)
