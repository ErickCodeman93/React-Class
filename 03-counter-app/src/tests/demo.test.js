describe( 'Pruebas en el archivo demo.test.js', () => {

	test( 'deben ser iguales los string', () => {
		//1. inicialización
		const mensaje = 'Hola Mundo';

		//. estímulo
		const mensaje2 = `Hola Mundo`;

		expect( mensaje ).toBe( mensaje2 );
	} )
} );

