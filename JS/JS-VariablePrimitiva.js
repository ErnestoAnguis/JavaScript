// El uso de un método de cadena no modifica la cadena
var bar = "baz";
console.log(bar); 
bar.toUpperCase();
console.log(bar); 

// El uso de un método de arreglo muta el arreglo
var foo = [];
console.log(foo); 
foo.push("plugh");
console.log(foo); 

// La asignación le da al primitivo un nuevo valor (no lo muta)
bar = bar.toUpperCase();
console.log(bar)
