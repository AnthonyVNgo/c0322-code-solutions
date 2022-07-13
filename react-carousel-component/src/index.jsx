import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const urls = [
  {
    id: 1,
    url: null
  },
  {
    id: 2,
    url: null
  },
  {
    id: 3,
    url: null
  }
];

root.render(<Carousel urls={urls} />);
