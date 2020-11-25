import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFecth } from '../../hooks/useFecth'

import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

	const { counter , increment } = useCounter( 1 );

	const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

	const { loading, data } = useFecth( url );

	const { author, quote } = !!data && data[0];

	return (
		<div>
			<h3>BreakingBad Quotes</h3>
			<hr />

			{ 
				loading
				?
					(
						<div className="alert alert-info text-center">
							Loading ...
						</div>
					) 
				:
					(
						<blockquote className="blockquote text-right">
							<p className="mb-0">{ quote }</p>
					<footer className="blockquote-footer">{ author }</footer>
						</blockquote>
					)
			}

			<button 
				className='btn btn-primary' 
				onClick={ increment }
			>
				Siguiente Cita
			</button>
			
		</div>
	)
}
