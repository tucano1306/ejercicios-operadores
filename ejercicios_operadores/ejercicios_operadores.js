// 1. Realiza una función que reciba un número y devuelva true si es par o false si es impar.
SOLUTION:
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(7)); // false


// 2. Realiza una función que reciba un número y devuelva true si es múltiplo de 5 o false si no lo es.
SOLUTION:
function esMultiploDeCinco(numero) {
    return numero % 5 === 0;
}

console.log(esMultiploDeCinco(10)); // true
console.log(esMultiploDeCinco(7));  // false


// 3. Realiza una función que reciba un número y devuelva el doble de ese número.
SOLUTION:
function doble(numero) {
    return numero * 2;
}
console.log(doble(5)); // 10
console.log(doble(8)); // 16



// 4. ¿Cuál es el resultado de las siguientes operaciones?
// console.log(2 + 2 * 2)=  Resultado: 6
// console.log(10 + 4 - 2 * 5)= Resultado: 4
// console.log(11 % 4)= console.log(11 % 4); // Resultado: 3
// console.log(10 ** 2)= Resultado: 100

// 5. ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
let a = 1
let b = 1

const c = ++a
const d = b++

// console.log(a)= 2
// console.log(b)= 2
// console.log(c)= 2
// console.log(d)= 1

// 6. ¿Cuáles son los valores de ‘e’ y ‘f’ después del código a continuación?
let e = 2
const f = 1 + (e *= 2)
// console.log(e)= 4
// console.log(f)= 5

// 7. ¿Cuál es el valor de ‘g’ después del código a continuación?
let g = 3
g += 5
g *= 2
// console.log(g)= 16


// 8. Cómo podría saber si el número que tengo en la variable "n" es un número par. Realiza una expresion usando la función console.log() para resolver este ejercicio.

let n = 4
console.log(n % 2 === 0);

// 9. En el siguiente ejercico tengo un error, ¿podrías corregirlo para que no concatene y pueda sumar? Modifica el console, no la constante.

const x = '4'
const y = 5


// - Aqui va tu código - //
console.log(Number(x) + y);

// 10. Con base a la precedencia de los operadores ¿qué resultado tendría la siguiente expresión? y ¿por qué?:

const resultado = 2 * 3 + 5 / 5

// - Aquí va tu respuesta - //
console.log(resultado); // 7

