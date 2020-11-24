import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

	const arr = [ 'one punch man' ];

	const [ categories, setCategories ] = useState( arr );
	
	// const handleAdd = () => setCategories( [ ...categories, 'devil may cry' ] );
	// const handleAdd = () => setCategories( cats => [ ...cats, 'devil may cry' ] );
	

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories } />
			<hr />		
			{/* <button onClick={ handleAdd }>Agregar</button> */}
			<ol>
				{
					// categories.map( category => ( 
					// 	<li key={ category }>
						// { category }
						// </li> 
					// ) )
					categories.map( category => ( 
						<GifGrid 
							key={ category }
							category={ category } 
						/>	 
					) )
				}
			</ol>
		</>
	);
}
