import throttle from "lodash/throttle"; // import funkcie throttle
import { links } from "./clickEvents";
const headingPage = document.querySelector(".page-header");
let secPos = document.querySelectorAll(".secPos");
secPos = Array.from(secPos); // z nodeList na Array (istota)

const pageHeaderScrolled = 50; // pozicia odkial ma nastat zmena  classy pre hlavne menu

function changeLinkState() {
	let index = secPos.length;

	while (
		--index &&
		Math.ceil(window.scrollY) + headingPage.scrollHeight <
			secPos[index].offsetTop
	) {}

	links.forEach((link) => link.classList.remove("active"));
	links[index].classList.add("active");
	window.scrollY >= pageHeaderScrolled
		? headingPage.classList.add("page-header-scrolled")
		: headingPage.classList.remove("page-header-scrolled");
}
// event pre scroll + throttle nech neodpalujem vkuse ziadosti
export let scrollChange = window.addEventListener(
	"scroll",
	throttle(changeLinkState, 300)
);
