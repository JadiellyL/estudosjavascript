function clicar(){
	var cont = 1
	var res = window.document.getElementById('foto')

	while(cont <= 6){
		res.innerHTML += `<p>Oi tudo bem? ${cont}</p>`
		cont++
	}
}

function clicar2(){
	var cont = 1
	var res = window.document.getElementById('foto2')
	
	do{
		res.innerHTML += `<p>Sim, está tudo bem comigo. ${cont}</p>`
		cont++
	}while(cont <= 6)
}