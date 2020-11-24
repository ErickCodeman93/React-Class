import { useEffect, useState } from "react"
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

	const [state, setState] = useState({
		data:[],
		loading:true
	});

	useEffect( () => {

			getGift( category )
				.then( imgs => {

					setTimeout( () => {
						
						setState({
							data:imgs,
							loading:false,
						});

					}, 1000 );
				});
	}, [ category ] );

	return state;
}
