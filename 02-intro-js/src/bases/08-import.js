import { heroes } from '../data/heroes';

// const getHeroeById = ( id ) => {
// 	return heroes.find( ( heroe ) => {
// 		if( heroe.id === id )
// 			return true;
// 		else
// 			return false; 
// 	});
// }

const getHeroeById = ( id ) =>  heroes.find( ( heroe ) => heroe.id === id );

// console.log( getHeroeById( 3 ) );

const getHeroeByOwner = ( owner ) =>  heroes.filter( ( heroe ) => heroe.owner === owner );

// console.log( getHeroeByOwner( 'Marvel' ) );


// console.log( owners );

export{
	getHeroeById,
	getHeroeByOwner,
}

 