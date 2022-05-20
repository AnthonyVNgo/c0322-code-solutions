import React from 'react';
export default class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { clicks: false, count: 0 };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.startInterval = this.startInterval.bind(this);
  }

  startInterval() {
    this.intervalID = setInterval(this.start, 1000);
  }

  start() {
    this.setState({ clicks: true, count: this.state.count + 1 });
  }

  stop() {
    this.setState({ clicks: false });
    clearInterval(this.intervalID);
  }

  reset() {
    if (this.state.clicks === false) {
      this.setState({ count: 0 });
      clearInterval(this.intervalID);
    }
  }

  render() {
    <div>

    </div>;

    if (this.state.clicks === false) {
      return (
          <div className='column'>
          <div className="timer" onClick={this.reset}>
              <p>
                {this.state.count}
              </p>
            <i className="fa-solid fa-arrow-rotate-left"></i>
            </div>
            <div className="btn">
              <button onClick={this.startInterval}>
              <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
      );
    } else if (this.state.clicks !== false) {
      return (
        <div className='column'>
          <div className="timer-static">
            <p>
              {this.state.count}
            </p>
          </div>
          <div className="btn">
            <button onClick={this.stop}>
              <i className="fa-solid fa-pause"></i>
            </button>
          </div>
        </div>
      );
    }
  }
}
