import React from 'react';
import * as ReactDOM from 'react-dom';

function CustomButton(prop) {
  return (
    <button>{prop.text}</button>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

root.render(element);
