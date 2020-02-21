	/*var idade = 70

	if(idade < 16){
		console.log("Não vota")
	}else if((idade >= 16 && idade < 18) || idade > 65){
			console.log("Voto opcional")
	}else{
		console.log("Vot0 obrigatorio")
	}*/
	
	var agora = new Date()
	var hora = agora.getHours()
	
	console.log(`Agora são ${hora}`)
	if(hora < 12){
		conole.log("Bom dia")
	}else if(hora <= 18){
		console.log("Boa tarde")
	}else{
		console.log("Boa noite")
	}