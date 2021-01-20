import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'


export const MemoHook = () => {

	const [show, setShow] = useState(true);

	const { counter, increment } = useCounter( 5000 );

	const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ] );
	
	return (
		<div>
			<h1>MemoHook</h1>
			<h3>Counter : <small>{ counter }</small></h3>
			<hr />

			<p>{ memoProcesoPesado }</p>

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
