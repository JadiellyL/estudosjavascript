
function carregar(){
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	var minutos = data.getMinutes()
	msg.innerHTML = `Agora são ${hora} horas e ${minutos}minutos`
	
	if(hora >= 0 && hora < 12){
		img.src = "img/manha.png"
		document.body.style.background = "#a2cd2f"
	}else if(hora >= 12 && hora < 18){
		img.src = "img/tarde.png"
		document.body.style.background = "#b98460"
	}else{
		img.src = "img/noite.png"
		document.body.style.background = "#515254"
	}
}