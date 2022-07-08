import React from 'react';

export default class Accordion extends React.Component {
  constructor() {
    super();
    this.state = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('bbang');
  }

  render() {
    return (
      <div className="container">
        <ul>
          {
            this.props.topics.map((topic, index) => {
              return (
                <AccordionItem key={index} header={topic.header} details={topic.details} clicked={this.handleClick} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function AccordionItem(props) {
  return (
  <li>
    <button onClick={props.clicked}>
      <h3>{props.header}</h3>
    </button>
    <AccordionDetails details={props.details}/>
  </li>
  );
}

function AccordionDetails(props) {
  return (
    <p className='not-hidden'>{props.details}</p>
  );
}
