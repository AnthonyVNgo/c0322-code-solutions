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
    <button id={props.id} onClick={props.onClick} clicked={props.clicked}>
      <h3>{props.header}</h3>
    </button>
    <AccordionDetails details={props.details}/>
  </li>
  );
}

function AccordionDetails(props) {
  // const displayClass = props.clicked === true
  //   ? 'not-hidden'
  //   : 'hidden';

  let displayClass;
  if (props.clicked === true) {
    displayClass = 'not-hidden';
  }
  displayClass = 'hidden';

  return (
    // <p>{props.details}</p>
    // <p className={displayClass}>{props.details}</p>
    // <p className={displayClass}>{props.details}</p>
    // <p className='not-hidden'>{props.details}</p>
    <p className={displayClass}>{props.details}</p>
  );
}
