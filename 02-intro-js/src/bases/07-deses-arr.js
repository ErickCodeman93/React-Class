const personajes = [ 'Goku', 'Vegueta', 'Trunks' ];

console.log( personajes[ 0 ], personajes[ 1 ], personajes[ 2 ] );

//tip de Oro, si quieren renombrar el nombre de una variable en todo el archivo, solo pongan el cursor enmedio 
// de la palabra y aprieten F2 y listo!!! 
const [ p1 ] = personajes;
const [ ,p2 ] = personajes;
const [ ,,p3 ] = personajes;

console.log( p1, p2, p3 );

const retornaArreglo = () => {
	return [ 'ABC', 123 ];
}

const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros );

const usState = ( valor ) => {
	return [ valor, () => console.log( 'Hola Mundo' ) ]
}

const [ nombre, setNombre ] = usState( 'Goku' );
console.log( nombre );
setNombre();