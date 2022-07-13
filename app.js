window.addEventListener("DOMContentLoaded", (event) => {
	const headerItems = document.querySelector("header").children;
	const buttons = document.querySelectorAll(".button");

	for (let i = 0; i < headerItems.length; i++) {
		setTimeout(() => {
			headerItems[i].style.opacity = 1;
			headerItems[i].classList.add("animate__animated");
			headerItems[i].classList.add("animate__fadeInDown");
			if (i == headerItems.length - 1) {
				buttons.forEach((button, index) => {
					setTimeout(() => {
						buttons[index].style.opacity = 1;
						buttons[index].classList.add("animate__animated");
						buttons[index].classList.add("animate__fadeInUp");
					}, 500 * (index + 1));
				});
			}
		}, 500 * (i + 1));
	}
});
