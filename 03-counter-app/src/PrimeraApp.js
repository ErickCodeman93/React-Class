// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


//Funcional Component

const PrimeraApp = ( { saludo2 = 'Hola Mundo', saludo3 , subtitulo } ) => {
	// return ( 
	// 	<div>
	// 		<h1>Hola</h1>
	// 		<p>Mi primera aplicación</p>
	// 	</div>
	// 	);
	// return ( <Fragment> 
	// 			<h1>Hola</h1>
	// 	 		<p>Mi primera aplicación</p>
	// 		</Fragment> );
	const saludo = 'Erick';

	// const info = {
	// 	'edad' : 28,
	// 	'state' : 'Edomex'
	// }

	// console.log( saludo2 );

	return ( 
		<>
			<h1>Hola { saludo }</h1>
			<br/>
			<h2>{ saludo2 }</h2>
			{/* <p>Mi primera aplicación</p> */}
			<p>{ subtitulo }</p>
			{/* <pre> { JSON.stringify( info, null, 3 ) } </pre> */}
		</>
	);
} //end component

PrimeraApp.propTypes = {
	saludo2 : PropTypes.string.isRequired
}

//Este sirve para que el desarrollador desde la consola verifique con que propiedades cuenta el
// componente
PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtitulo',
	saludo3: ''
}

export default PrimeraApp;