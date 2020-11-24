import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'; 

describe( 'Funciones', () => {

	test('getUser debe retornar un objeto', () => {
		
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502'
		};

		const user = getUser();

		expect( user ).toEqual( userTest ); 
	});

	test('getActivo debe retornar un objeto', () => {
		
		const nombre = 'Erick';
		const userTest = {
			uid: 'ABC567',
			username: nombre
		};
		
		const user = getUsuarioActivo(nombre);

		expect( user ).toEqual( userTest );
	});
	
	
} );