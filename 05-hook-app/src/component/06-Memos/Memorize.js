import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import '../02-useEffect/effects.css'


export const Memorize = () => {

	const [show, setShow] = useState(true);

	const { counter, increment } = useCounter(1);
	
	return (
		<div>
			<h1>Memorize Counter : <Small value={ counter } /></h1>
			<hr />

			<button 
				className='mt-3 btn btn-outline-primary'
				onClick={ increment }
			>
				+1
			</button>

			<button 
				className='mt-3 ml-3 btn btn-outline-primary'
				onClick={ () => { setShow( !show ) }  }
			>
				Show/Hide { JSON.stringify( show ) }
			</button>

		</div>
	)
}
