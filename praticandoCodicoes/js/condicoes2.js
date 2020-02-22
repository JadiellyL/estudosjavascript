function verificar(){
	var data = new Date()
	var anoatual = data.getFullYear()//pega com 4 dígitos
	var fano = window.document.getElementById('txtano')
	var res = window.document.querySelector('div#res')
	
	var anodigitado = Number(fano.value)
	
	if(anodigitado.length == 0 || anodigitado > anoatual){
		alert("Verifique os dados e tente novamente")
	}else{
		var fsex = document.getElementsByName('radsex')
		var idade = anoatual - anodigitado
		var genero = ""
		var tag = document.createElement('img')//criando tag img
		tag.setAttribute('id','foto')//como se tivesse colocando img com id foto no html
		var classif = ""
		
		if(fsex[0].checked){//se o que tiver marcado for masculino
			genero = "homem"
			if(idade >= 0 && idade < 10){
				classif = "criança"
				tag.setAttribute('src', 'img/menino.jpeg')
			}else if(idade < 21){
				classif = "jovem"
				tag.setAttribute('src', 'img/adolescentemenino.jpeg')	
			}else if(idade <= 50){
				classif = "Adulto"
				tag.setAttribute('src', 'img/adultohomem.jpeg')
			}else{
				classif = "Idoso"
				tag.setAttribute('src', 'img/idoso.jpeg')
			}//*/
		}else if(fsex[1].checked){
			genero = "mulher"
			if(idade >= 0 && idade < 10){
				classif = "criança"
				tag.setAttribute('src', 'img/menina.jpeg')
			}else if(idade < 21){
				classif = "jovem"
				tag.setAttribute('src', 'img/adolescentemenina.jpeg')	
			}else if(idade <= 50){
				classif = "Adulta"
				tag.setAttribute('src', 'img/adultomulher.jpeg')
			}else{
				classif = "Idosa"
				tag.setAttribute('src', 'img/idosa.jpeg')
			}
		}
		
		res.innerHTML = `Detectamos ${genero} ${classif}
		com ${idade} anos de idade`
		res.appendChild(tag)//adicionar um elemento
		
	}
}