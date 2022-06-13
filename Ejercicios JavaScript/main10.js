//Apartado 1)
//let palabra = "amatista";
//console.log(palabra.replace('amatista','omotisto'));

//Apartado 2)
function acaEmpieza(cadena) {
    return cadena.toLowerCase().startsWith("aca");  // case insensitive
}

console.log(acaEmpieza("aCAdemia"));
console.log(acaEmpieza("academia"));
console.log(acaEmpieza("escuela"));


//Apartado 3)
function dimeHola(hola) {
    if (hola.toLowerCase() === "hola") {             // case insensitive
        for (let i = 0; i < 3; i++) {
            console.log("HOLITA");
        }

    } else {
        console.log("me voy");
    }
}

dimeHola("hola");
dimeHola("no quiero");