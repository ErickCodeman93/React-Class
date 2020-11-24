import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

	const state = useState( value );
	const [ counter, setCounter ] = state;

	//handleAdd 
	const add = ( e ) => {
		setCounter( counter + 1  );
		// setCounter( ( c ) => c + 1 );
	} //end function

	const substract = ( e ) => counter > 0 && setCounter( counter - 1 );


	const reset = ( e ) => setCounter( value );

	return(
		<>
			<h1>Counter App</h1>
			<h2>{ counter }</h2>
			<button onClick={ add }>+1</button>
			<button onClick={ reset }>Reset</button>
			<button onClick={ substract }>-1</button>
		</>
	);
} //end component

CounterApp.propTypes = {
	value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
	value : 0
}

export default CounterApp;

//rafcp es un comando que crea la estructura del componente