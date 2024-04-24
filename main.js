do{
    options = prompt ("1. Valid Password\n2. Calculate your incomes\n3. Calculate your IMC\n4 ")
    switch(options) {
        case ("1"):
        password = prompt ("Enter your password")
        contrasenaValida(password)
        break
        case ("2"):
        edad = prompt ("Enter your age")
        ingresos = prompt ("Enter your incomes")
        calcularImpuestos (edad, ingresos)
        case ("3"):
        weight = prompt ("Enter your weight")
        height = prompt ("Enter your height")
        calculateIMC(weight, height) 
    }
}while (options)

function contrasenaValida(password) {
    switch (password) {
        case "2Fj(jjbFsuj":
            alert("True")
        case "eoZiugBf&g9":
            alert ("False")
        default: 
            alert ("False")
            break
    }
}

function calcularImpuestos (edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        alert ("Your incomes are: " + ingresos*0.4)
    }else {
        alert ("Your incomes are: " + 0)
    }
}

function calculateIMC (peso, altura) {
    let operation = (peso / (altura * altura))
    if (operation < 18.5) {
        alert ("Bajo peso")
    }else if (operation >= 18.5 && operation <=24.9){
        alert ("Normal")
    }else if (operation >= 25 && operation <=29.9){
        alert ("Sobrepeso")
    }else {
        alert ("Obesidad")
    }
}
