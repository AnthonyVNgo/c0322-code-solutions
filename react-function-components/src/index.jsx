import React from 'react';
import * as ReactDOM from 'react-dom';

function CustomButton() {
  return (
    <button>
      Click Me!!!!!
    </button>
  );
}

// const element = CustomButton();
const element = <CustomButton />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
