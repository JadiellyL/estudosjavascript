function mostrar(){
	let numb = window.document.getElementById('numero')
	let tab = window.document.getElementById('seltab')
	let num = Number(numb.value)
	let result


	if(numb.value.length == ''){
		alert("Campo vazio!")
	}else{
		tab.innerHTML = ''
		for(let i = 0; i < 10; i++){
			let item = document.createElement('option')
			//result = num * i
			item.text  = `${i} x ${num} = ${num * i}`
			item.value = `tab(i)`
			tab.appendChild(item)
	}

		//res.innerHTML  += `<p> ---------------------------- </p>`
	}

}
