import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'

// const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector( '#root' );
// console.log( 'hola' );
// ReactDOM.render( saludo, divRoot );

ReactDOM.render( <PrimeraApp saludo2="Hola, Soy Goku" subtitulo="Chido"/>, divRoot );
// ReactDOM.render( <CounterApp value={10}/>, divRoot );

