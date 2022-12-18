$(document).ready(function () {
	$(".milestones-list").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
});

$(".banner-list").slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 500,
	fade: true,
	cssEase: "linear",
	autoplay: true,
});

$(".newevent-list").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

const menu = document.querySelector(".list-menumb");
const iconmenu = document.querySelector(".iconmenu");
const iconclose = document.querySelector(".iconclose");
const menuItem = document.querySelectorAll(".list-menumb .menu-item");
const body = document.querySelector(".close1");

iconmenu.addEventListener("click", () => {
	menu.classList.toggle("open");
	iconmenu.classList.toggle("close");
	iconclose.classList.toggle("active");
});

iconclose.addEventListener("click", () => {
	menu.classList.toggle("open");
	iconmenu.classList.toggle("close");
	iconclose.classList.toggle("active");
});

body.addEventListener("click", () => {
	menu.classList.remove("open");
	iconmenu.classList.remove("close");
	iconclose.classList.remove("active");
	}
)


menuItem.forEach(item => {
	item.onclick = () => {
		menu.classList.toggle("open");
		iconmenu.classList.toggle("close");
		iconclose.classList.toggle("active");
	}
});

// Scroll on top

let topBtn = document.querySelector(".scroll");

// On Click, Scroll to the page's top, replace 'smooth' with 'auto' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () =>
	window.scrollY > 400
		? (topBtn.style.opacity = 1)
		: (topBtn.style.opacity = 0);

$("a[href='#top']").click(function () {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});


// scoll smooth #id

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top - 150
	}, 1000);
});