//1. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const readlineSync = require("readline-sync")

const userWord = readlineSync.question("Ingrese una palabra: ")

let i=1
while (i <= 10) {
   console.log( userWord)
   i=i+1
}

//2.Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
const userEdad = readlineSync.question("Ingrese su edad: ")
let j=1
let año= 2024 - userEdad
while (j <= userEdad) {
   console.log("Edad en el año= ",año, "es de ", j)
   j=j+1
   año++ 
}