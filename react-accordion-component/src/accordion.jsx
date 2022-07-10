import React from 'react';

export default class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      buttonId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      clicked: true,
      buttonId: event.currentTarget.id
    });
  }

  render() {
    return (
      <div className="container">
        <ul>
          {
            this.props.topics.map((topic, index) => {
              return (
                <AccordionItem
                  key={index}
                  header={topic.header}
                  details={topic.details}
                  onClick={this.handleClick}
                  id={topic.id}
                  clicked={this.state.clicked}
                  />
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
    <button id={props.id} onClick={props.onClick} >
      <h3>{props.header}</h3>
    </button>
      <AccordionDetails details={props.details} clicked={props.clicked}/>
  </li>
  );
}

function AccordionDetails(props) {
  if (props.clicked === true) {
    return (
      <p>{props.details}</p>
    );
  }
  return null;
}

// if props id !==
