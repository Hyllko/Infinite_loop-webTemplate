import { slideBtn, galleryBtn } from "./createBtn";

let reviewSet = document.querySelector(".review-set");
let gallerySet = document.querySelector(".set");
const reviewerWidth = document.querySelector(".reviewer").offsetWidth;
const imageWidth = document.querySelector(".image").offsetWidth;

function moveImages(index, array, section, elWidth) {
	for (let i = 0; i < array.length; i++) {
		if (index === i) {
			section.style.transform = `translateX(${-elWidth * index}px)`;
		}
	}
}

export function galleryImgMove() {
	slideBtn.forEach((btn, index) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			moveImages(index, slideBtn, reviewSet, reviewerWidth);
		});
	});
}

export function reviewImgMove() {
	galleryBtn.forEach((btn, index) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			moveImages(index, galleryBtn, gallerySet, imageWidth);
		});
	});
}
