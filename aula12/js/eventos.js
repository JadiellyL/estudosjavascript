function soma(n1=0, n2=0){
	return n1+ n2
}

let msg = document.getElementById('msg')

//let a = soma(2)
msg.innerHTML += `<p>A soma é: ${soma(2,6)}</p>`

function parimp(n){
	if (n%2 == 0) {
		return 'Par'
	}else{
		return 'Ímpar'
	}
}

msg.innerHTML += `<p>O número é: ${parimp(7)}</p>`

function fatorialsimples(x){
	let fat = 1
	for(let i = x; i > 1; i--){
		fat *= i
	}

	return fat
}

let res = fatorialsimples(5)
msg.innerHTML += `<p>O fatorialsimples é: ${res}</p>`

function fatorial(n){
	if (n == 1) {
		return 1
	}else{
		return n * fatorial(n-1)
	}
}

let res2 = fatorial(5)
msg.innerHTML += `<p>O fatorial recursivo é: ${res2}</p>`