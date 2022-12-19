// const memberItemEL = document.querySelectorAll(".member-item");

// memberItemEL.forEach((item) => {
// 	console.log(item);
// 	item.mouseenter = () => {
// 		console.log("aa");
// 	};
// });

$(".member-item").hover(
	function () {
		$(".member-item").not(this).addClass("w-0");
		$(".member-item")
			.not(this)
			.find(".member-item-content")
			.addClass("none");
	},
	function () {
		$(".member-item").not(this).removeClass("w-0");
		$(".member-item").not(this).addClass("w-100");
		$(".member-item")
			.not(this)
			.find(".member-item-content")
			.removeClass("none");
	}
);