import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
// import { render } from '@testing-library/react'

describe('Pruebas en <PrimeraApp />', () => {

	// test('Debe mostrar el título "Hola, Soy Goku"', () => {
		
	// 	const saludo = 'Hola, Soy Goku';
	// 	const { getByText } = render( <PrimeraApp saludo2={ saludo }/> );

	// 	expect( getByText( saludo ) ).toBeInTheDocument();
	// 	// wrapper.getByText();
	// });
	
	test('debe mostrar <primerApp /> correctamente ', () => {

		const saludo = 'Hola, Soy Goku';
		const wrapper = shallow( <PrimeraApp saludo2={ saludo }/> );
		expect( wrapper ).toMatchSnapshot();
	});

	test('debe mostrar un subtitulo con props', () => {
		
		const saludo = 'Hola, Soy Goku';
		const subtitulo = 'Hola soy un subtitulo';

		const wrapper = shallow( 
			<PrimeraApp 
				saludo2={ saludo }
				subtitulo={ subtitulo }
			/> 
		);

		const textoParrafo = wrapper.find( 'p' ).text();
		// console.log( textoParrafo );

		expect( textoParrafo ).toBe( saludo );
	});
	
	
})
