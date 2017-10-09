button = document.querySelector('#determinant');
function onClick(){
	
	const s11 = document.querySelector('#s11').value;
	const s12 = document.querySelector('#s12').value; 
	const s13 = document.querySelector('#s13').value; 
	const s21 = document.querySelector('#s21').value; 
	const s22 = document.querySelector('#s22').value; 
	const s23 = document.querySelector('#s23').value; 
	const s31 = document.querySelector('#s31').value; 
	const s32 = document.querySelector('#s32').value; 
	const s33 = document.querySelector('#s33').value;
	
	let result=s11*(s22*s33-s32*s23) + s21*(s12*s33 - s32*s13) - s31*(s12*s23 - s22*s13);;
	document.getElementById("result").innerHTML=result;
}
button.addEventListener('click',onClick);
