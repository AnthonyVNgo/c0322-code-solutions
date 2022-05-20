import React from 'react';
export default class HotButton extends React.Component {
  constructor() {
    super();
    this.state = { clicks: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.clicks === false) {
      this.setState({ clicks: true });
    } else if (this.state.clicks !== false) {
      this.setState({ clicks: false });
    }
  }

  render() {
    if (this.state.clicks === false) {
      return (
        <div className='on toggle-container'>
          <button className='slide-on' onClick={this.handleClick}>
          </button>
          <span>on</span>
        </div>
      );
    } else if (this.state.clicks !== false) {
      return (
        <div className='off toggle-container'>
          <button className='slide-off' onClick={this.handleClick}>
          </button>
          <span>off</span>
        </div>
      );
    }
  }
}
