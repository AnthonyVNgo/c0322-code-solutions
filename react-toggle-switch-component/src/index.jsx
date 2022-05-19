import React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/styles.css';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

class HotButton extends React.Component {
  constructor() {
    super();
    this.state = { clicks: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(this.state.clicks);
    if (this.state.clicks === false) {
      this.setState({ clicks: true });
    } else if (this.state.clicks !== false) {
      this.setState({ clicks: false });
    }
  }

  render() {
    const hb0 = {
      backgroundColor: 'green',
      color: 'white'
    };
    const hb1 = {
      backgroundColor: 'grey',
      color: 'white'
    };

    if (this.state.clicks === false) {
      return (
        <button style={hb0} onClick={this.handleClick}>
          on
        </button>
      );
    } else if (this.state.clicks !== false) {
      return (
        <button style={hb1} onClick={this.handleClick}>
          off
        </button>
      );
    }
  }
}

const element = (
  <div>
    <HotButton />
  </div>
);

root.render(element);
