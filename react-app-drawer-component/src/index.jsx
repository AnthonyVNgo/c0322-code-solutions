import React from 'react';
import * as ReactDOM from 'react-dom';
import Stopwatch from './app-drawer';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = (
  <div className='container'>
    <div className="row">
      <Stopwatch />
    </div>
  </div>
);

root.render(element);
