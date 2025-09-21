let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //let numeroDeUsuario = document.querySelector('input')
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    
    /* 
    console.log(numeroDeUsuario === numeroSecreto); //para validar si es verdadero o falso
    console.log(intentos); 
     */

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#Intentar').setAttribute('disabled',true);
    } else {
        // El Usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p',`El numero digitado: ${numeroDeUsuario} es incorrecto 
                    El numero secreto es menor`);
            } else {
                asignarTextoElemento('p',`El numero digitado: ${numeroDeUsuario} es incorrecto 
                    El numero secreto es mayor`);
            }
            intentos ++;
            limpiarCaja();
        }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSeceto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    /* 
    console.log(`Lista ${listaNumeroSorteados} `);
    console.log(`Lista Cant ${listaNumeroSorteados.length} `);
    console.log(`Numero secreto ${numeroGenerado} `);
     */

    // si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        //asignarTextoElemento('p','ya se asignaron todos los numeros'); // se comenta para que el juego pueda continuar
        listaNumeroSorteados = [];
        return generarNumeroSeceto()
    } else {

        //si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSeceto()
        } else {
            //
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Adivina el número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSeceto ();
    intentos = 1
    limpiarCaja();
    //console.log(`Numero secreto ${numeroSecreto} `);
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar de boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    document.getElementById('Intentar').removeAttribute('disabled');
}


condicionesIniciales();

















//----------------------------- Desafíos -------------------------------

//     Crear una función que muestre "¡Hola, mundo!" en la consola.

/* function desafio1 () {
    console.log('Hola Mundo')
}

desafio1() */

//     Crear una función que reciba un nombre como parámetro y
//     muestre "¡Hola, [nombre]!" en la consola.

/* let nombre = prompt('Ingresa tu nombre: ');

function desafio2 (nombre) {
    
    console.log(`¡Hola, ${nombre} !`);
}

desafio2(nombre) */

//     Crear una función que reciba un número como parámetro y 
//     devuelva el doble de ese número.

/* let num = parseInt(prompt('Ingresa un numero: '));

function desafio2 (num) {
    num = num * 2
    console.log(`¡El doble es , ${num} !`);
}

desafio2(num) */

//     Crear una función que reciba tres números como parámetros 
//      y devuelva su promedio.

/* let num1 = parseInt(prompt('Ingresa numero 1 : '));
let num2 = parseInt(prompt('Ingresa numero 2 : '));
let num3 = parseInt(prompt('Ingresa numero 3 : '));

function desafio3 (num1,num2,num3) {
    suma = (num1 + num2 +num3)
    promedio = suma / 3
    console.log(`¡El promedio es , ${promedio} !`);
}

desafio3(num1,num2,num3) */


//     Crear una función que reciba dos números como parámetros y 
//      devuelva el mayor de ellos.

/* let num1 = parseInt(prompt('Ingresa numero 1 : '));
let num2 = parseInt(prompt('Ingresa numero 2 : '));

function desafio4 (num1,num2) {

    if ( num1 > num2) {
        console.log(`¡El numero mayor es , ${num1} !`); 
    } else {
        console.log(`¡El numero mayor es , ${num2} !`); 
    }
    
}

desafio4(num1,num2)
 */

//     Crear una función que reciba un número como parámetro y 
//      devuelva el resultado de multiplicar ese número por sí mismo.
/* 
let num = parseInt(prompt('Ingresa numero : '));

function desafio5(num) {
    valor =  num * num
    console.log(`¡El resultado es , ${valor} !`);
    return ;
}

desafio5(num)
 */



// Desafíos:

//     Crea una función que calcule el índice de masa corporal (IMC)
//      de una persona a partir de su altura en metros y peso en kilogramos,
//      que se recibirán como parámetros.

/* let altura = 1.80
let peso = 120

function calcularImc(altura,peso) {
    imc = peso / (altura ** 2 )
    console.log (imc)
    return imc
}

calcularImc(altura, peso) */

//     Crea una función que calcule el valor del factorial de un número
//      pasado como parámetro.

/* function factorial(n) {
    let resultado = 1
        for (let i = 1; i < n+1; i++) {
            resultado *= i
            console.log(`i = ${i}`)
            console.log(`resultado = ${resultado}`)
        }
        console.log(`resultadofinal = ${resultado}`)
    return resultado
}
 factorial(5) */

//     Crea una función que convierta un valor en dólares, 
//      pasado como parámetro, y devuelva el valor equivalente en reales
//      (moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
//      Para esto, considera la cotización del dólar igual a R$4,80.

//     Crea una función que muestre en pantalla el área y 
//      el perímetro de una sala rectangular, utilizando la altura 
//      y la anchura que se proporcionarán como parámetros.

//     Crea una función que muestre en pantalla el área 
//      y el perímetro de una sala circular, utilizando su radio 
//      que se proporcionará como parámetro. Considera Pi = 3,14.

//     Crea una función que muestre en pantalla la tabla de multiplicar 
//      de un número dado como parámetro.


// Desafíos

//     Crea una lista vacía llamada "listaGenerica".

//let listaGenerica = []

//     Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con 
//      los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

/* let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
mostrarLenguajes()

//     Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
//         'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang')
mostrarLenguajes()

//     Crea una función que muestre en la consola todos los elementos 
//      de la lista "lenguagesDeProgramacion.

function mostrarLenguajes() {
    console.log(lenguagesDeProgramacion)
}

//     Crea una función que muestre en la consola todos los elementos 
// de la lista "lenguagesDeProgramacion en orden inverso.

function invertirLista() {
    lenguagesDeProgramacion.reverse()
    mostrarLenguajes()
}
invertirLista() */


//     Crea una función que calcule el promedio de los elementos en una lista de números.

/* let lista = [1,2,3,4,5]
function promedio(lista) {
    let suma = 0
        for (let index = 0; index < lista.length; index++) {
            //console.log (`suma antes ${suma} `)
            suma += lista[index];
            //console.log (`suma despues ${suma} `)
        }
        console.log (`suma final ${suma} `)
        console.log (`cantidad ${lista.length} `)
        resultado = suma / lista.length
        console.log (`resultado ${resultado} `)
}
promedio(lista)
 */

//     Crea una función que muestre en la consola el número más grande 
// y el número más pequeño en una lista.

/* let lista = [5, 50, 3, 122, 41, 7]

let mayor = Math.max(...lista)
let menor = Math.min(...lista)

console.log("Mayor:", mayor) 
console.log("Menor:", menor) 
 */

//     Crea una función que devuelva la suma de todos los elementos en una lista.

/* let lista = [1,2,3,4,5]
function suma(lista) {
    let suma = 0
        for (let index = 0; index < lista.length; index++) {
            //console.log (`suma antes ${suma} `)
            suma += lista[index];
            //console.log (`suma despues ${suma} `)
        }
        console.log (`suma final ${suma} `)
}
suma(lista)
 */

//     Crea una función que devuelva la posición en la lista donde se encuentra 
// un elemento pasado como parámetro, o -1 si no existe en la lista.

/* 
let lista = [5, 50, 3, 122, 41, 7, 3]
let numBuscar = 3
let posiciones = []

function devolverPosicion(numBuscar,lista) {
    for (let index = 0; index < lista.length; index++) {
        
        if (numBuscar === lista[index]) {
            posiciones.push(index)
            console.log (`se encuentra en la ${(posiciones.length === 1) ? 'pocision' : 'pocisiones' } ${posiciones} `)
        } else {
            console.log (-1)
        }

    }
}

devolverPosicion(numBuscar,lista)
 */


//     Crea una función que reciba dos listas de números del mismo tamaño 
//      y devuelva una nueva lista con la suma de los elementos uno a uno.

/* 
let lista1 = [1,2,3]
let lista2 = [6,5,4]

function unirLista(lista1, lista2) {
    let listaNueva = lista1.concat(lista2)
    console.log (listaNueva)
    return listaNueva
}

function suma(lista) {
    let suma = 0
        for (let index = 0; index < lista.length; index++) {
            suma += lista[index];
        }
        console.log (`suma final ${suma} `)
}
//unirLista(lista1, lista2)
suma(unirLista(lista1, lista2))
 */


//     Crea una función que reciba una lista de números y 
//      devuelva una nueva lista con el cuadrado de cada número.

/* 
let lista4 = [1,2,3,4,5]
let listaResultado = []

function cuadradoLista(lista) {
    for (let index = 0; index < lista.length; index++) {
        listaResultado.push(lista[index] ** 2)
    }
    console.log(listaResultado)
}
cuadradoLista(lista4)
 */


