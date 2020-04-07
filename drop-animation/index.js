let drop = document.getElementById("drop")
let shadow = document.getElementById("shadow")
let reveal = document.getElementById("reveal")

drop.addEventListener("click", () => {
	drop.classList.add("dropped")
	shadow.style.animation = "shadow 2s"
	reveal.classList.add("revealed")
})