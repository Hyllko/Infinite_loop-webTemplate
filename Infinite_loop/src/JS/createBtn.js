const windowSize = window.innerWidth;
export let slideBtn = document.querySelectorAll("#review-btn li");
slideBtn = Array.from(slideBtn);

export let galleryBtn = document.querySelectorAll("#gallery-btn li");
galleryBtn = Array.from(galleryBtn);

function createBtn(parent, array) {
	// vytvorenie li elementu a pushnutie do arrayu
	let li = document.createElement("li");
	li.innerHTML = `<a href="#"></a>`;
	document.querySelector(parent).appendChild(li);
	array.push(li);
}

export function includeBtn(pageWidth) {
	if (windowSize <= pageWidth) {
		createBtn("#review-btn", slideBtn);
		createBtn("#gallery-btn", galleryBtn);
	}
}
