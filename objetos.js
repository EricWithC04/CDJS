let producto = {
    nombre: "zanahoria",
    precio: 15,
    cantidad: 12
}

function calcularTotal (product) {
    return product.precio * product.cantidad;
}

// console.log(calcularTotal(producto));

let persona = {
    nombre: "Alvaro",
    edad: 28,
    profesion: "oftalmologo"
}

function presentarPersona (person) {
    console.log(`Hola, soy ${person.nombre}, tengo ${person.edad} años y soy ${person.profesion}`);
}

// presentarPersona(persona);

function esMayorDeEdad (person) {
    return person.edad >= 18
}

// console.log(esMayorDeEdad(persona));