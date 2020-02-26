function adicionar(){
	var nome = window.document.getElementById('nome')
	var numero = window.document.getElementById('numero')
	
	var res = window.document.getElementById('res')
	
	var nomee = nome.value
	var num = numero.value
	
	
	if(nomee == 0 || num == 0){
		window.alert("Os campos não podem estar vazios")
	}else{
		
		res.innerHTML += `<p>Nome: ${nomee.toUpperCase()} <br/> Telefone: ${num}</p>`
	}
	
}