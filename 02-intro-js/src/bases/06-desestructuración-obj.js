//Desestructuración
// Asignación Desestructurante

const persona = {
	'nombre' : 'Tony',
	'edad' : 45,
	'clave' : 'ironMan'
};

const { nombre, edad, clave, } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );
console.log('');
// const retornaPersona = ( usuario ) => {

// 	const { edad, clave, nombre, } = usuario;
// 	console.log( edad, clave, nombre );
// }

const retornaPersona = ( { edad, clave, nombre, rango = 'captitan'} ) => console.log( edad, clave, nombre, rango );
retornaPersona( persona );

const usContext = ( { edad, clave, nombre, rango = 'captitan'} ) => ({
	'nombreClave': nombre,
	'anio': edad,
	'latlng' : {
	 'lat': 14.3232,
	 'lng': -23.232323,
	}
});

const { nombreClave, anio, latlng:{  lat, lng } } = usContext( persona );

console.log( nombreClave, anio);
console.log( lat, lng );




