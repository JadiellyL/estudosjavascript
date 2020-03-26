function soma(n1=0, n2=0){
	return n1+ n2
}

let msg = document.getElementById('msg')

//let a = soma(2)
msg.innerHTML = `A soma é: ${soma(2,6)}`
