function coletarDados(){
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    calcularIMC(peso, altura)
}

function calcularIMC(argPeso, argAltura){
    console.log(argPeso)
    console.log(argAltura)
    let imc = argPeso / (argAltura * argAltura)
    document.getElementById("res").innerHTML = imc
    classificarIMC(imc)
}

function classificarIMC(argImc){
    var classificacao = ""

    if (argImc < 18.5){
       classificacao = "Desnutrição" 
    }
    else if (argImc < 25){
        classificacao = "Peso Normal"
    }
    else if (argImc < 30){
        classificacao = "Sobrepeso"
    }
    else if (argImc < 35){
        classificacao = "Obesidade I"
    }
    else if (argImc < 40){
        classificacao = "Obesidade II"
    }
    else{
        classificacao = "Obesidade III"
    }
    document.getElementById("status").innerHTML = classificacao
}

