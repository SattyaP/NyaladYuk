const items = document.querySelectorAll("nav ul li");
items.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("li.active").classList.remove("active");
        item.classList.add("active");
    });
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
$(document).ready(function () {
    $(".banner").slick({
        infinite: true,
        speed: 300,
        autoplay: true,
    });
	setTimeout(() => {
		$(".loading").remove();
	}, 100);
    return;
});
