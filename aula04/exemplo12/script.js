function calcularIMC(){
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let imc = peso / (altura * altura)
    document.getElementById("res").innerHTML = imc

    var classificacao = ""

    if (imc < 18.5){
       classificacao = "Desnutrição" 
    }
    else if (imc < 25){
        classificacao = "Peso Normal"
    }
    else if (imc < 30){
        classificacao = "Sobrepeso"
    }
    else if (imc < 35){
        classificacao = "Obesidade I"
    }
    else if (imc < 40){
        classificacao = "Obesidade II"
    }
    else{
        classificacao = "Obesidade III"
    }
    document.getElementById("status").innerHTML = classificacao
}