// Funciones en JS
const saludar = function( nombre ){
	return `Hola ${ nombre }`;
}

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

const getUser = () => ( {
		'uid' : '12341234',
		'username' : 'nubMaster6000',
} );

console.log( saludar( 'Erick' )  );
console.log( nickName() );
console.log( getUser() );

// Retorna un objeto implicito
const getUsuarioActivo = ( name ) => ( {
		'uid' : 'ABC345',
		'username' : name,
} );

console.log( getUsuarioActivo( 'Erick' ) );

