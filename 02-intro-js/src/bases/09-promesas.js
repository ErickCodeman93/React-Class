import { getHeroeById } from './bases/08-import'

// const promesa = new Promise(  ( resolve, reject ) => {
// 	setTimeout( () => {
// 		const heroe = getHeroeById( 5 );
// 		resolve( heroe );
// 		//reject( 'No se encontro al heroe' );
// 	}, 2000 );
// } );

// promesa.then( ( response ) => {
//  console.log( 'heroe', response );
// } )
// .catch( ( error ) => console.log( error ) ) ;


const getHeroeByIdAsync = ( id ) => {

		return new Promise(  ( resolve, reject ) => {
			setTimeout( () => {
					const heroe = getHeroeById( id );
					if( heroe )
						resolve( heroe );
					else
						reject( 'No se encontro al heroe' );
			}, 2000 );
		} );
}

getHeroeByIdAsync( 1 ).then( console.log ).catch( console.warn );