// variables  y contantes
const persona =  {
    'nombre' : 'Tony',
    'apellido' : 'Stark',
    'edad'  : 45, 
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );
