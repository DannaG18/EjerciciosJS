do{
    options = prompt ("1. Valid Password\n2. Calculate your incomes\n3. Calculate your IMC\n4. Print Arrangement\n5. Count Range\n6. Likes\n7.  Sum ranges\n8. Number of a's\n9. Sum Arrangement\n10. Multiply Arrangement\n11. Remove Ceros\n12. Transcribe\n13. ")
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
            console.log(likes(983)) // "983"
            console.log(likes(1900)) // "1K"
            console.log(likes(54000)) // "54K"
            console.log(likes(120800)) // "120K"
            console.log(likes(25222444)) // "25M"
            break;
        case ('7'):
            console.log(sumarRango(0, 10)) // 55
            console.log(sumarRango(12, 14)) // 39
            console.log(sumarRango(5, 5)) // 0
            break
        case('8'):    
            console.log(numeroDeAes("abracadabra")) // 5
            console.log(numeroDeAes("etinol")) // 0
            console.log(numeroDeAes("a")) // 0
        case('9'):

            console.log(sumarArreglo([3, 1, 2])) // 6
            console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
            console.log(sumarArreglo([])) // 0
            break
        case('10'):
            console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
            console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
            console.log(multiplicarArreglo([])) // 1
        case('11'):
            console.log(removerCeros([0, 1, 0, 2, 0, 3]));
            console.log(removerCeros([9, 3, 6, 4]));
            console.log(removerCeros([0, 0 , 0]));
        case('12'):
            console.log(transcribir("ACGT")) // "UGCA"
            console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
        case('13'):
            console.log(capitalizar("pedro")) // "Pedro"
            console.log(capitalizar("hola mundo")) // "Hola mundo"
            console.log(capitalizar("")) // ""
        case('14'):
            console.log(max([3, 9, 6])) // 9
            console.log(max([67, 35, 54, 26])) // 67
            console.log(max([5, 9, 2, 4, 5, 7])) // 9
        case('15'):
            console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
            console.log(pares([])) // []
        case('16'):
            console.log(password("hola")) // "h0l4"
            console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
            console.log(password("")) // ""
        case('17'):
            console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
            console.log(posiciones([])) // []
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

    function contarRango(n1, n2) {
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

function sumarRango (inicial, final){
    let suma = 0
    for (inicial; inicial <= final; ++inicial){
        suma += inicial
    }
    return suma
}

//EJERCICIO 8

function numeroDeAes(word) {
    let counter = 0;
    for (let i = 0; i < word.toLowerCase().length; ++i) {
      if (word[i] === 'a') {
        ++counter;
      }
    }
    return counter;
  }

//EJERCICIO 9

function sumarArreglo(num){
    try {
        return num.reduce((a,b) => a + b);
    }catch{
        return 0;
    }
}

//EJERCICIO 10

function multiplicarArreglo(num){
    try {
        return num.reduce((a,b) => a * b);
    }catch{
        return 0;
    }
}


//EJERCICIO 11

function removerCeros(num){
    try {
        return num.filter((number) => number != 0);
    }catch (error){
        return [];
    }
    }

//EJERCICIO 12

function transcribir(string){

    let ARN = [];
    for (let i = 0; i < ARN.toUpperCase().length; ++i) {
      const ADN = ARN[i].toUpperCase();
      switch (ADN) {
        case 'G':
          ARN.push('C');
          break;
        case 'C':
          ARN.push('G');
          break;
        case 'T':
          ARN.push('A');
          break;
        case 'A':
          ARN.push('U');
        default:
          continue;
      }
    }
    return ARN;
  }

  //EJERCICIO 13

  const capitalizar = (word) => {
    if (frase[0] != null) {
        const mayuscula = word[0].toUpperCase();
        const out = mayuscula + word.substring(1);
        return out;
    }
    else {return ""};
  };

  //EJERCICIO 14

function max (arreglo){
    if (arreglo.length === 0) {
        return undefinded;
    }
    let maxNumber = arreglo[0];

    for (let i=1; i < arreglo.length; i++){
        if (arreglo[i] > maxNumber){
            maxNumber = arreglo[i];
        }
    }
    return maxNumber;
}

//EJERCICIO 15

function pares(numbers){
    const paresNumbers = [];
    for (let i= 0; i < numbers.length; i++);{
        if (numbers[i] % 2 === 0 ) {
            paresNumbers.push(numbers[i]);
    }
}
return paresNumbers;
}

//EJERCICIO 16

function password (text) {

    text = text.toLowerCase();
    
    text = removeWhiteSpace(text);

    const toChar = str.split('');

     for (let i = 0; i < toChar.length; i++) {
        switch (toChar[i]){
            case 'a':
                toChar[i] = '4';
                break;
            case'e':
                toChar[i] = '3';
                break;
            case'i':
                toChar[i] = '1';
                break;
            case'o':
                toChar[i] = '0';
                break;
        }
     }
     str = toChar.join('');
     return str;
}

const removeWhiteSpace = (text) => {
    let result = '';
    for ( let i=0; i < text.length; i++) {
        if (str[i] != ' '){
            result += str[i];
        }    
    }
    return result;
}

//EJERCICIO 17

function posiciones(arr) {
    const posicionesPares = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            posicionesPares.push(i); // Si el número es par, agregamos su posición al nuevo arreglo
        }
    }

    return posicionesPares;
}