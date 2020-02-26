function contar(){
	var inicio = window.document.getElementById('inicio')
	var fim = window.document.getElementById('fim')
	var passo = window.document.getElementById('passo')
	
	var res = window.document.getElementById('res')
	
	
	if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
		res.innerHTML = `Impossível contar`
		window.alert("ERRO! Faltam dados!")
	}else{
		res.innerHTML += `Contando...`
		var final = Number(fim.value)
		var iniciar = Number(inicio.value)
		var pass = Number(passo.value)
		if(pass <= 0){
			window.alert("passo inválido! Considerano passo 1")
			p = 1
			res.innerHTML += `<p>\u{1F970} ${c}</p>`
		}
		if(iniciar < final){
			
			for(var c = iniciar; c <= final ; c+=pass){
				res.innerHTML += `<p>\u{1F970} ${c}</p>` 
			}
			
		}else{
			for(var c = iniciar; c >= final ; c-=pass){
				res.innerHTML += `<p>\u{1F970} ${c}</p>` 
			}
		}
		
		res.innerHTML += `\u{1f3c1}`
		
	}
	/*
	while(cont <= final){
		
		res.innerHTML += `<p> &#128540; ${cont}<p>`
		
		cont = cont + pass;
		cont++
		
	}*/
}