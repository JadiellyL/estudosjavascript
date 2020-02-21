var txtv = window.document.getElementById('txtvel')
var res = window.document.querySelector('div#res')

function calcular(){
	var vel = Number(txtv.value)
	res.innerHTML = `<p> Sua velocidade atual é de
	 <strong>${vel}</strong> KM/h </p>`
	 if(vel > 60){
	 	res.innerHTML += `<p> Você está <strong>multado
	 	</strong> por excesso de velocidade.</p>`
	 }
	 res.innerHTML += `<p>Dirija sempre com cinto de
	 segurança.</p>`// += para não apagar a mensagem anterior
}