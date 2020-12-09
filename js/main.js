const header = document.querySelector("header");

// обработчик событий
window.addEventListener("scroll", function() {
	checkScroll()
});

// чтобы после обновления страницы красный класс не терялся
document.addEventListener("DOMContentLoaded", function() {
	checkScroll()
})

function checkScroll() {
	let scrollPos = window.scrollY;

	if(scrollPos > 0) {
		header.classList.add('transparent');
	} else {
		header.classList.remove('transparent');
	}
}