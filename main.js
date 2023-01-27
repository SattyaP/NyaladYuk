document.onreadystatechange = () => {
  document.querySelector(".loading").remove()
}

const items = document.querySelectorAll("nav ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active").classList.remove("active");
    item.classList.add("active");
  });
});



$(document).ready(function () {
  $('.banner').slick({
    infinite: true,
    speed: 300,
    autoplay: true,
  });
});

