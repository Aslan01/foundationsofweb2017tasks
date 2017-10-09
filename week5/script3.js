button = document.querySelector("#addStudent");
button.addEventListener("click",onClick);
let bool = true;
function onClick(){
	if(document.querySelector("#name").value.length == 0){
		var n = document.querySelector("#name");
		n.classList.add('error');
		bool = false
	}
	if(document.querySelector("#surname").value.length == 0){
		var s = document.querySelector("#surname");
		s.classList.add('error');
		bool = false;
	}
	if (document.querySelector("#faculty").value.length == -1){
		var o = document.querySelector("#faculty");
		o.classList.add('error');
		bool = false;
	}
	if(bool){
		var newTr = document.createElement("tr");
		document.querySelector("#students").appendChild(newTr);

		var newName = document.createElement("td");
		newName.textContent = document.getElementById("name").value;
		document.querySelector("#students").appendChild(newName);

		var newSur = document.createElement("td");
		newSur.textContent = document.getElementById("surname").value;
		document.querySelector("#students").appendChild(newSur);


		var newFac = document.createElement("td");
		newFac.textContent = document.getElementById("faculty").value;
		document.querySelector("#students").appendChild(newFac);
	}

}
