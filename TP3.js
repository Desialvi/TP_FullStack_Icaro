//1. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const readlineSync = require("readline-sync")

const userWord = readlineSync.question("Ingrese una palabra: ")

let i=1
while (i <= 10) {
   console.log( userWord)
   i=i+1
}
