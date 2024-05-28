// El primitivo
let foo = 5;

// Define una función que debería cambiar el valor primitivo
function addTwo(num) {
  num += 2;
  console.log(foo); 
}
// Otra función que intenta hacer lo mismo
function addTwo_v2(foo) {
  foo = 2;
  console.log(foo); 
}

// Llama a tu primera función mientras pasas el primitivo como argumento
addTwo(foo);
// Obtiene el valor primitivo actual
console.log(foo); 

// Intenta de nuevo con tu segunda función...
addTwo_v2(foo);
console.log(foo); 

//Al estar pasando una variable primitiva  las funciones creadas, estas si se modifican 
//dentro de la funcion pero como una copia del valor, por lo que al momento de 
//imprimir el valor de la variable primitiva, esta queda igual.