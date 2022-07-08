import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const topics = [
  {
    id: 1,
    header: 'Hypertext Markup Language',
    details: 'HTML text'
  },
  {
    id: 2,
    header: 'Cascading Style Sheets',
    details: 'CSS text'
  },
  {
    id: 3,
    header: 'JavaScript',
    details: 'JS text'
  }
];

root.render(<Accordion topics={topics}/>);

// The Accordion component should accept its topics as a prop(an Array of Objects).There may be any number of topics with accompanying details.

// Interpretation:
// The Accordion component has the property/props, topics
// The Accordion component's topics property accepts topics
// The topics passed into the topics property is an array of objects
// Whenever we deal with an array/list of things, it's a good idea to add IDs
// According to the mockup, topics will have:
// headers
// details
