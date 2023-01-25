var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var operacao = document.getElementById("operacao");
var resultado = document.querySelector("span");

function Calculo(){
     
    switch (operacao.value) {
        case "+":
        resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
        break;

        case "-":
        resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
        break;

        case "*":
        resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
        break;

        case "/":
        resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
        break;
    }
   
}