let msg = window.document.getElementById('msg')
let num = [5, 1]

msg.innerHTML = `<p>Nosso vetor é o [${num}]</p>`
num[2] = 9 //adiciona um elemento no índice 2
msg.innerHTML += `<p>Adicionando o 9 = [${num}]</p>`
num[1] = 3 /*neste caso irá substituir o elemento 
da posição 1 por 3*/
msg.innerHTML += `<p>Adicionando o 3 = [${num}]</p>`
num.push(6)//adiciona o elemento na última posição
msg.innerHTML += `<p>A primeira posição é [${num[0]}]</p>`
//mostra primeira posição
msg.innerHTML += `<p>Adicionando o 10 =  [${num}]</p>`
msg.innerHTML += `<p>Tamanho do vetor = [${num.length}]</p>`
//mostra o tamanho do vetor com o atributo length
msg.innerHTML += `<p>Em ordem = [${num.sort()}]</p>`
//coloca os elementos do vetor em ordem crescente

for(let i = 0; i < num.length; i++){
	msg.innerHTML += `<p> [${num[i]}]</p>`
}

for(let i in num){
	msg.innerHTML += `<p><strong>Vetor: [${num[i]}]</strong></p>`
}
