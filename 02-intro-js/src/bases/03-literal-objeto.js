// variables  y contantes
const persona =  {
    'nombre' : 'Tony',
    'apellido' : 'Stark',
    'edad'  : 45, 
    'direccion' : {
        'ciudad' : 'New york',
        'zip' : 55555,
        'lat' : '23.3233',
        'lng' : '23.3233',
    }
};

console.table( persona );

// Copia al objeto por referencia
// const persona2 = persona
// persona2.nombre = 'Peter';

//Operdor spread o clona o copia el objeto persona
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );
