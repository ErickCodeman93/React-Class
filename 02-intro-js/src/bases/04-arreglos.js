// Arreglos en js
const arreglo = [1,2,3,4];
// arreglo.push( 5 );

//Modiica la funcion push arreglo 1 por que se copia por referencia
// let arreglo2 = arreglo;
// arreglo2.push( 5 );

// Esto hace una copia sin afectar el arreglo inicial
let arreglo2 = [ ...arreglo, 5 ];

// Crea un arreglo nuevo apartir de anterior
const arreglo3 = arreglo2.map( ( number ) => number * 2 );

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );