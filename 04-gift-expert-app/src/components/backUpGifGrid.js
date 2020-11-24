import React, { useState, useEffect } from 'react'
import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

	const [ images, setImages ] = useState([]);

	useEffect( () => {
		getGift( category ).then( setImages );
	}, [ category ]);

	

	return (
		<>
			<h3>{ category }</h3>
			<div className="card-grid">
				{/* <ol>
					{
						images.map( ( { id, title } ) => ( 
								<li key={ id }>
									{ title.trim().length > 0 ? title : 'No tiene título' }
								</li> 
							)
						) 
					}
				</ol> */}
				{
					images.map( img => ( <GifGridItem key= { img.id } { ...img } /> ) ) 
				}
			</div>
		</>
	)
} //end component
