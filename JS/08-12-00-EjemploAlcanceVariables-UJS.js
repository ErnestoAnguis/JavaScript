// Alcance de Variables en JS

let variableGlobal = 5;

// Modificar el valor
variableGlobal = 10;
console.log(variableGlobal)

// Definicion funcion
function miFuncion(dato){
    console.log(variableGlobal)
    console.log(dato);
    // Modificamos la variable global
    variableGlobal += dato;
    console.log(variableGlobal)
    // No podemos redefinir una variable global (let)
    //let variableGlobal = 30;
}

// Llamamos la funcion
miFuncion(variableGlobal);
console.log(variableGlobal)
