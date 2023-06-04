function positivoNegativo() {
    let num = parseInt(prompt("ingrese un numero"));
    if (num > 0) {
        alert("Es positivo")
    }
    if (num < 0) {
        alert("Es negativo")
    }
    if (num === 0) {
        alert("El numero ingresado es 0")
    }
}

//positivoNegativo()

function esPrimo () {
    let num = parseInt(prompt("ingrese un numero para validar si es primo"));
    let primo = true;
    for (let i = 2; i < 10; i++) {
        if (num % i === 0 && num != i) {
            primo = false;
        }
    }
    if (num === 0) {
        primo = false;
    }
    if (num === 1) {
        primo = false;
    }
    if (num === 2) {
        primo = true;
    }
    if (primo) {
        alert("el numero ingresado es primo")
    } else {
        alert("el numero ingresado no es primo")
    }
}

// esPrimo()

function convertirGrados() {
    let grados = parseInt(prompt("indique la cantidad de grados"))
    let unidad = parseInt(prompt("indique a que unidad desea convertir, 1-Celsius, 2-Farenheit"))
    
    if (unidad === 1) {
        alert(`La cantidad ingresada son ${(grados - 32) * (5 / 9)}° Celsius`);
    }
    if (unidad === 2) {
        alert(`La cantidad ingresada son ${(grados * (9 / 5)) + 32}° Farenheit`);
    }
    if (unidad > 2 || unidad < 1) {
        alert("La unidad indicada no existe");
    }
}

// convertirGrados()

function totalCompra() {
    let total = 0;
    let valor = 0;
    while (valor != "total") {
        total += parseInt(valor); 
        valor = prompt("indique el valor del producto o la palabra 'total' para recibir el total");
    }
    alert(`el total de la compra es $${total}`)
}

totalCompra()