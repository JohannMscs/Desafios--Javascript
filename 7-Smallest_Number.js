var arr = [10,5,10,-5,50,76]
var min = Math.min(...arr)
var max = Math.max(...arr)

console.log(min)

var numero = prompt("digite um numero")
console.log(numero)

if(numero <= min){
    console.log("esse numero e menor pu igual o menor numero armazenado no array")
}else{
    console.log("esse numero e maior que o menor numero armazenado no array")
}