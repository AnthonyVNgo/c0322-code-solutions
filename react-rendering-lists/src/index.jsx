import React from 'react';
import * as ReactDOM from 'react-dom';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

function ULComponent(props) {
  const arrayProperty = props.array;
  const listItems = arrayProperty.map((arrayElement, index) =>
     <li key={index}>
       {arrayElement.name}
     </li>
  );

  return (
     <ul>{listItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

root.render(<ULComponent array={pokedex}/>);
