var res = window.document.getElementById('res')
var numeros = window.document.getElementById('txtnumeros').value

function verificar(){
	
	numeros = numeros.split(",")
	var aux = Number(numeros[0])
	for(i = 0; i < numeros.length; i++){
		
		if(Number(numeros[i]) > aux){
			aux = numeros[i]
		}
	}
	res.innerHTML = `<p>O maior é ${aux}</p>`
}