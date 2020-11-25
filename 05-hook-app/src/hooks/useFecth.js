import { useEffect, useRef, useState } from "react"

 
 export const useFecth = ( url ) => {
	
	const isMounted = useRef( true );
	const [state, setstate] = useState( { data: null, loading: true, error: null } );

	useEffect( () => {
		
		return () => {
			isMounted.current = false;
		}

	}, [])

	useEffect(() => {
		
		setstate( { data: null, loading: true, error: null } );

		fetch( url )
		.then( response => response.json() )
		.then( data => {

			setTimeout( () => {

				if( isMounted.current )
					setstate( {
						data : data,
						loading : false,
						error: null,
					} );
				else
					console.log( 'setState no se llamo' );

			}, 4000 );
			
		});

	}, [url] );

	return state;

 }
 