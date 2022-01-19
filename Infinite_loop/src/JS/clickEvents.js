export let links = document.querySelectorAll(".menu li");
links = Array.from(links); // z nodeList na Array (istota)
const burgerBtn = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar");

export let menuEvent = () => {
	links.forEach((el) => {
		el.addEventListener("click", function cliked() {
			links.forEach((sib) => sib.classList.remove("active"));
			this.classList.add("active");

			//skrytie navigacie po kliknuti na link
			navBar.classList.remove("visible");
		});
	});

	burgerBtn.addEventListener("click", () => navBar.classList.toggle("visible"));
};
