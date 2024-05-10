do{
    options = prompt ("1. Valid Password\n2. Calculate your incomes\n3. Calculate your IMC\n4. Print Arrangement\n5. Count Range\n6. Likes ")
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
            break;
        case ("4"):
            imprimirArreglo(1, "Hola", 2, "Denso")
            break;
        case ("5"):
            console.log(contarRango(1, 9));
            console.log(contarRango(1332, 8743));
            console.log(contarRango(5, 6));
            break;
        case ("6"):
            console.log(likes(983));
            console.log(likes(1983));
            console.log(likes(54000));
            console.log(likes(120800));
            break;
        case ('7'):
            console.log(sumarRango(0, 10));
            console.log(sumarRango(12, 14));
            console.log(sumarRango(5, 5));
    }
}while (options)

//EJERCICIO 1

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

//EJERCICIO 2

function calcularImpuestos (edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        alert ("Your incomes are: " + ingresos*0.4)
    }else {
        alert ("Your incomes are: " + 0)
    }
}

//EJERCICIO 3

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

//EJERCICIO 4


function imprimirArreglo(f1,f2,f3,f4) {
    
    const texto = Array();
    texto.push(f1,f2,f3,f4)
    texto.forEach(item => console.log(item));
}

//EJERCICIO 5

    const contarRango = (n1, n2) => {
    let counter = 0;
    for (n1; n1<n2; ++n1) {
        counter++;
    }
    return counter-1;
};

//EJERCICIO 6

function likes (number) {
    let newNumber = 0;
    const Thousand = number > 1000;
    const Million = number > 1000000;
    if (Million) {
        newNumber = Math.floor(number / 1000000);
        return `${newNumber}M`;
    } else if (Thousand) {
        newNumber = Math.floor(number / 1000);
        return `${newNumber}K`;
    }
    };

//EJERCICIO 7

function sumarRangos (inicial, final){
    let suma = 0
    for (inicial; inicial <= final; ++inicial){
        suma += inicial
    }
    return suma
}
