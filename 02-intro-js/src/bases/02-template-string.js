const nombre = 'Erick';
const apellido = 'Alva';

// const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `Mi nombre es ${ nombre } ${ apellido } ${ 1 + 1 }`;

console.log( nombreCompleto );

function saludo( nombre ){
	return 'hola ' + nombre
}

// Se pueden meter funciones o expresiones dentro del template string
console.log( `Este es un mensae: ${ saludo( 'Erick' ) }` );