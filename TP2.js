// 1. La variable definida abajo almacena un numero entero entre 1 y 100 de forma aleatoria, 
//es decir que cada vez que se vuelva a ejectuar el codigo obtendrá un número nuevo aleatorio.

let numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);

//Usar esta variable para determinar si el número es par o impar (Un número es par si el resto de 
//la división sobre 2 es igual a 0). Para calcular el resto usar: resto = dividendo % 2.

function paroimpar(numero) {
    if (numero % 2 == 0) {
        return "El número " + numeroRandom + " " + "es Par"
    }
    return "El número " + numeroRandom + " " + "no es Par"
}

console.log(paroimpar(numeroRandom))

//2. Dada dos palabras, "tren" y "edificio", hacer un programa que nos permita calcular cuál palabra es más larga. Usar la función length

function longPalabra(Palabra1, Palabra2) {
    LongP1 = Palabra1.length
    LongP2 = Palabra2.length
    if (LongP1 > LongP2) {
        return "La palabra " + Palabra1 + " " + "es mas larga que " + Palabra2
    }
    else if (LongP1 == LongP2) {
        return "La palabra " + Palabra1 + " " + "es igual de larga que la " + Palabra2
    }
    return "La palabra " + Palabra2 + " " + "es mas larga que " + Palabra1
}

console.log(longPalabra("tren", "edificio"))



// 3. Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número 9. Se puede usar la función while o for.
let i=1
while (i <= 10) {
    console.log( "9 x",i,"=",i*9)
    i=i+1
}

// 5. Escribir un programa que inicie un array vacío y luego vaya almacenando números aleatorios. 
// Puede usar la variable "numeroRandom" del ejercicio 1.

let lista = []
for (i=0; i<50; i++){
    let numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    lista.push(numeroRandom)
}

console.log(lista)

//4. Escribir una función con el nombre "multiplicar" que me permita pasarle un número como párametro y lo multiplique x 23 y 
//retorne el resultado. Usar esta funcion en otra variable y mostrar el resultado con el console.log

function multiplicar(numero) {
    Result = numero*23
    return Result
}

const readline = require('readline')
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question("Ingrese un número: ", function(num){
    let Resultado = multiplicar(num)
    console.log("El resultado de multiplicar", num, "por 23 es", Resultado)
    read.close() 
})








