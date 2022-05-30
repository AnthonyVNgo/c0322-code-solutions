import React from 'react';
import * as ReactDOM from 'react-dom';
import { RegistrationForm } from './validated-input';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = (
  <div className='container'>
    <div className="row">
      <RegistrationForm/>
    </div>
  </div>
);

root.render(element);
