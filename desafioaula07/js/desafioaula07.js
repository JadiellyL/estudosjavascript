

function paisquemoro(){
var pais = window.document.querySelector('input#pais')
var res = window.document.querySelector('div#res')
var paiss = pais.value
	if(paiss == "eua"){
		res.innerHTML = "<p> Você é <strong>Americano</strong></p>"
		res.innerHTML += "<p>Seja bem-vindo ao nosso País</p>"
	}
}