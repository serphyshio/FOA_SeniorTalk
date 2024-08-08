var swiper = new Swiper(".swiper-container", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	centeredSlidesBounds: true,
	slidesPerView: "auto",
	coverflowEffect: {
	  rotate: 20,
	  stretch: 0,
	  depth: 350,
	  modifier: 1,
	  slideShadows: true
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true,
	},
  });

