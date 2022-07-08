import React from 'react';

export default class Accordion extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <ul>
        {
          this.props.topics.map((topic, index) => {
            return (
            <AccordionItem key={index} header={topic.header} details={topic.details}/>
            );
          })
        }
      </ul>
    );
  }
}

function AccordionItem(props) {
  return (
  <li>
    <button>
      <h1>{props.header}</h1>
    </button>
    <AccordionDetails details={props.details}/>
  </li>
  );
}

function AccordionDetails(props) {
  return (
    <p>{props.details}</p>
  );
}
