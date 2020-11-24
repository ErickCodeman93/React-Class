import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';

describe( 'Pruebas en 02-template-string.js ', () => {

	test('prueba en el método getSaludo', () => {

		const name = 'Erick';
		const saludo = getSaludo( name );

		expect( saludo ).toBe( 'Hola ' + name );
		
	});

	test(  'Prueba que debe regresar Hola Carlos', () => {

		const saludo = getSaludo();

		expect( saludo ).toBe( 'Hola carlos' );
	});

});