var res = window.document.getElementById('res')
var idade = window.document.getElementById('txtidade').value

function verificar(){
	idade = idade.split(",")
	var aux = 0
	var aux2 = 0
	
	for(var i = 0; i < idade.length; i++){
		if(Number(idade[i]) >= 18){
			aux = aux + 1 
		}else{
			aux2 = aux2 + 1
		}
	}
	
	res.innerHTML += `<p>A quantidade de maiores de idade é ${aux}</p>`
	res.innerHTML += `<p>A quantidade de menores de idade é ${aux2}</p>`
}