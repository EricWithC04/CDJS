function obtenerSuma (nums) {
    let acumulador = 0; //la variable sera la suma de todos los elementos

    for (let i = 0; i < nums.length; i++) {
        acumulador += nums[i];               //el for recorrera cada uno de los elementos y los sumara al acumulador
    }

    return acumulador;
}

// console.log(obtenerSuma([3, 17, 34, 5, 11]));
// console.log(obtenerSuma([8, 12, 9, 0]));
// console.log(obtenerSuma([2, 19, 58, 4, 111]));

function obtenerPares (nums) {
    let pares = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            pares.push(nums[i])
        }
    }
    return pares
}

// console.log(obtenerPares([1, 2, 3, 4, 5, 6, 7, 8, 9]))

function obtenerPromedioPonderado (notas, pesos) {
    let promedio = 0;
    for (let i = 0; i < notas.length; i++) {
        promedio += (notas[i] * pesos[i]) / 100;
    }
    return promedio;
}

let nota = [80, 70, 60, 100];
let peso = [20, 20, 20, 40];
let nota2 = [60, 40, 35, 100];
let peso2 = [20, 15, 15, 50];

// console.log(obtenerPromedioPonderado(nota, peso));
// console.log(obtenerPromedioPonderado(nota2, peso2));

function obtenerMaximo (numeros) {
    let maximo = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

let maximos1 = [10, 15, 7, 9, 3, 100, 45];
let maximos2 = [19, 77, 101, 31, 95, 1000];
let maximos3 = [2, 63, 17, 10, 91, Infinity];
let maximos4 = [42, 51, 47, 99, 46];

// console.log(obtenerMaximo(maximos1));
// console.log(obtenerMaximo(maximos2));
// console.log(obtenerMaximo(maximos3));
// console.log(obtenerMaximo(maximos4));