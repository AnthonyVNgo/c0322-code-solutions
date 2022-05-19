import React from 'react';
import * as ReactDOM from 'react-dom';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

// the above is equal to the following:
// const root = ReactDOM.createRoot(document.querySelector('#root));

class HotButton extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    const hb0 = {
      backgroundColor: 'purple',
      color: 'white'
    };
    const hb1 = {
      backgroundColor: 'pink',
      color: 'white'
    };
    const hb2 = {
      backgroundColor: 'red',
      color: 'white'
    };
    const hb3 = {
      backgroundColor: 'orange'
    };
    const hb4 = {
      backgroundColor: 'yellow'
    };
    const hb5 = {
      backgroundColor: 'white'
    };

    if (this.state.clicks < 6) {
      return (
      <button style={hb0} onClick={this.handleClick}>
        Hot Button
      </button>
      );
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      return (
        <button style={hb1} onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      return (
        <button style={hb2} onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return (
        <button style={hb3} onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return (
        <button style={hb4} onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks >= 18) {
      return (
        <button style={hb5} onClick={this.handleClick}>
          Hot Button
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
