function esMayorEdad (edad) {
    // la expresion edad >= 18 devuelve true o false dependiendo del caso, simplemente retorna lo que la expresion devuelve
    return edad >= 18;
}

console.log(esMayorEdad(15));
console.log(esMayorEdad(18));
console.log(esMayorEdad(45));

function calcularAreaRectangulo (base, altura) {
    let area = base * altura;
    return area;
}

console.log(calcularAreaRectangulo(18, 20));
console.log(calcularAreaRectangulo(25, 40));
console.log(calcularAreaRectangulo(10, 15));

function esPalindromo (cadena) {
    let arrayCaracter = cadena.split(""); //convertir la cadena en un array de caracteres ["C", "A", "D", "E", "N", "A"]

    arrayCaracter.reverse(); //el metodo reverse da vuelta el array

    let unirArray = arrayCaracter.join(""); //metodo join une los elementos del array en un mismo string

    return cadena === unirArray; //se evalua si el inverso y el original son iguales y devuelve el resultado
}

console.log(esPalindromo("radar"));
console.log(esPalindromo("manzana"));
console.log(esPalindromo("anitalavalatina"));

function generarNumeroAleatorio () {
    let numAleatorio = Math.random(); //Math.random() genera un numero con decimales aleatorios

    let numeroEnteroAleatorio = Math.ceil(numAleatorio * 10); //se multiplica por 10 para que el resultado supere el 1 
                                                              //y Math.ceil() redondea hacia arriba de manera que el resultado no sea 0
    return numeroEnteroAleatorio;
}

console.log(generarNumeroAleatorio());
console.log(generarNumeroAleatorio());
console.log(generarNumeroAleatorio());