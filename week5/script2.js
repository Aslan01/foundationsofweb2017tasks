function onClick(event){
	document.getElementById("big").src = event.target.src;
}
image = document.querySelector("#carousel");
image.addEventListener('click',onClick);

