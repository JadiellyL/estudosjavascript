var res = window.document.getElementById('res')
var numeros = document.getElementById("txtNumeros").value

function calcularQuadrado(){
            
            numeros = numeros.split(",")
            for(i=0;i<numeros.length;i++){
                quadrado = Number(numeros[i])*Number(numeros[i])
                res.innerHTML += `<p>O quadrado de ${numeros[i]} é  ${quadrado}</p>`
            }
            
}