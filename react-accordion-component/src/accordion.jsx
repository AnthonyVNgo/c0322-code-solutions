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
      clicked: !this.state.clicked,
      buttonId: parseInt(event.currentTarget.id)
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
                  clickedBtnId={this.state.buttonId}
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
      <AccordionDetails details={props.details} isOpen={props.id === props.clickedBtnId} clicked={props.clicked}/>
  </li>
  );
}

function AccordionDetails(props) {
  if (props.isOpen && props.clicked) {
    return <p>{props.details}</p>;
  }
}

// buttonId: parseInt(event.currentTarget.id) wasted hours because the return was a string and not a number. THANKS REACT DEV TOOLS
