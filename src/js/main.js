//ARRAYS PT 2. .reverse() & .ToReversed()

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array2 = array1.reverse(function (item) {
    return item
})

console.log(array1)
console.log(array2)

// EJERCICIO: crear una lista de frutas y luego reversar(darle vuelta al array), pero cada una debe quedar en mayùscula en el nuevo array

let frutas1 = ["banano", "pera", "papaya", "mango", "melon"]
let frutas2 = frutas1.toReversed()

console.log(frutas1);

console.log(frutas2)

frutas2.forEach(element => {
    console.log(element.toUpperCase());
});

// METODO PARA ORDENAR UNA LISTA en orden alfabetico .SORT

let listaDesordenada = ["lucas", "maria", "ana", "pablo"]
listaDesordenada.sort() //no importa si tienen diferentes tipos de datos, igual la ordena.

console.log(listaDesordenada)

// METODO .forEach(f) es para recorrer listas

let listaCoders = ["maria", "camilo", "andres"]

listaCoders.forEach(function (coder, index) {
    console.log("el coder", coder, "està en la posiciòn", index)
})

// METODO .forin() me muestra el ìndice o posiciòn, no el valor

for (const key in listaCoders) {
    console.log(key)
}


// METODO    .forof()  me muestra solo el valor

for (const value of listaCoders) {
    console.log(value)
}

// METODO .every() recorre la lista y me devuelve un TRUE o FALSE. Condicional y mira si cumple o no cumple. 

let numeros = [55, 27, 34, 48, 92, 81]

let respuesta = numeros.every(numero => numero > 0)
let pares = numeros.every(numero => numero%2 == 0)

console.log(respuesta) //si al menos uno falla, imprime false.
console.log(pares)

// METODO .some  valida si al menos un elemento de la lista cumple con la condiciòn, 

let nombres  = ["lucas", "maria", "pablo"]
// let userName = prompt("ingrese su nombre de usuario")

let chekeoNombre = nombres.some(nombre => nombre === nombres) //con el prompt se cambia nombres por userName.


console.log(chekeoNombre)

//  METODO .filter .Ejercicio: crea una lista con 10 numeros y con filter primero sacar los nbumeros pares de la lista y guardarlos en una nueva; y  luego con otro filter saca los numeros impares y guardarlos en otra lista.

let numbers1 = [1,2,3,4,5,6,7,8,9,10]


let parNumbers = numbers1.filter(number => number % 2 === 0)
let imparNUmbers = numbers1.filter(number => number % 2! == 0) // 2! quiere decir lo contrario que 2

console.log(parNumbers) 
console.log(imparNUmbers)

let numerosPares = []
let numerosImpares = []

for (let i = 0; i < numbers1.length; i++) {
    if(numbers1[i] % 2 === 0) {
        numerosPares.push(numbers1[i])
    }else{
        numerosImpares.push(numbers1[i])
    }
}

console.log(numbers1)
console.log(numerosPares)
console.log(numerosImpares)