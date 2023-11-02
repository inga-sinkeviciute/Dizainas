// slider
document.querySelector(".slider input").addEventListener("change", function () {
	const slider = document.querySelector(".slider");
	if (this.checked) {
		slider.style.backgroundColor = "#2196F3";
	} else {
		slider.style.backgroundColor = "#ccc";
	}
});
