let drop = document.getElementById("drop")
let shadow = document.getElementById("shadow")
let reveal = document.getElementById("reveal")
let content = document.getElementById("content")
let reset = document.getElementById("reset")

drop.addEventListener("click", () => {
	drop.classList.add("dropped")
	shadow.style.animation = "shadow 1.7s"
	reveal.classList.add("revealed")
	content.classList.add("flipped")
})

reset.addEventListener("click", () => {
	drop.classList.remove("dropped")
	shadow.style.webkitAnimation = "none"
	setTimeout(() => {
		shadow.style.webkitAnimation = '';
	}, 10);
	reveal.classList.remove("revealed")
	content.classList.remove("flipped")
})