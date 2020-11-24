// El declarrar funciones de este tipo puede que se empalme con una variable
// function saludar(){
// 	return `Hola ${ nombre }`;
// }

// saludar = 30;

// Funciones en JS
// El declarar una funcion con una constante no abria error al querer usar como variable
const saludar = function( nombre ){
	return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
	return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;


// const nickName = ( lastName ) => {
//     return `Hola ${ lastName }`;
// }

// const nickName = ( lastName ) => `Hola ${ lastName }`;

const nickName = () => `Hola Goku`;

// const getUser = () => {
//     return {
//         'uid' : '12341234',
//         'username' : 'nubMaster6000',
//     }
// }

// Esta es la mejor practica de retornar un objeto con funciones de flecha 
const getUser = () => ( {
	'uid' : '12341234',
	'username' : 'nubMaster6000',
} );

console.log( saludar( 'Erick' )  );
console.log( saludar2( 'Erick2' )  );
console.log( saludar3( 'Erick3' )  );

console.log( nickName() );
console.log( getUser() );

// Retorna un objeto implicito
const getUsuarioActivo = ( name ) => ( {
	'uid' : 'ABC345',
	'username' : name,
} );

console.log( getUsuarioActivo( 'Erick' ) );

