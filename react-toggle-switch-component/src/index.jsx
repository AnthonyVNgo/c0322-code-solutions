import React from 'react';
import * as ReactDOM from 'react-dom';
import HotButton from './toggle-switch';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = (
  <div className='container'>
    <div className="row">
      <HotButton />
    </div>
  </div>
);

root.render(element);
