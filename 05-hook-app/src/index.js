import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithCustomHook } from './component/01-useState/CounterWithCustomHook';
// import { CounterApp } from './component/01-useState/CounterApp';
// import { HookApp } from './HookApp';
import './index.css';

ReactDOM.render(
  <CounterWithCustomHook />,
  document.getElementById('root')
);

