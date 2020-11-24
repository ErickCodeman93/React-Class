// const getImagePromesa = () => new Promise( resolve => resolve( 'http://dsdsdsdsds.com' ) );
// getImagePromesa().then( console.log );

// const getImage = async() => {
// 	return 'http://dsdsdsdsds.com';
// }

// getImage().then( response => console.log( response ) );

const getImage = async() => {

	try {
		const apiKey = 'dxQlXshz0xzQ3cHhgrvKGGKnC3uxICtR';
		const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
		const { data } = await response.json();
	
		const { url } = data.images.original;
		const img = document.createElement( 'img' );
		img.src = url
		document.body.append( img );

	} catch (error) {
		//Manejo del error
		console.log( error );
	} //end catch
	
}

getImage();