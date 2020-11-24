import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
	
	test('getHeroeById retorna el id de un heroe', () => {
		
		const id = 1;
		const heroe = getHeroeById( id );

		const heroeData = heroes.find( ( h ) => h.id === id );
		expect( heroe ).toBe( heroeData );


	});

	test('getHeroeById retorna undefined de un heroe', () => {
		
		const id = 10;
		const heroe = getHeroeById( id );

		expect( heroe ).toBe( undefined );


	});

	test('getHeroesByOwner retorna un arreglo DC', () => {
		
		const owner = 'DC';
		const heroeOwner = getHeroesByOwner( owner );
		const dataHeroe = heroes.filter( (heroe) => heroe.owner === owner );
		
		expect( heroeOwner ).toEqual( dataHeroe );
		
	});


	test('getHeroesByOwner retorna un arreglo Marvel', () => {
		
		const owner = 'Marvel';
		const heroeOwner = getHeroesByOwner( owner );
		
		expect( heroeOwner.length ).toBe( 2 );
		
	});
	

})
