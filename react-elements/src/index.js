// var ReactDOM = require('react-dom');

import React from 'react';
import * as ReactDOM from 'react-dom';

const reactEl = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log(reactEl);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(reactEl);
