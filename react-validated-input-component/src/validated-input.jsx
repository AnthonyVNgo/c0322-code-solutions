
import React from 'react';

export default class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { clicks: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: !this.state.clicks });
  }

  handleOverlayClick() {
    this.setState({ clicks: false });
  }

  render() {
    const overlayClasses = this.state.clicks ? 'display-overlay' : 'display-none';
    const navClasses = this.state.clicks ? 'display-nav' : 'display-none-nav';

    return (
      <div className='column'>
        <i onClick={this.handleClick} className="fa-solid fa-bars"></i>
        <div className={overlayClasses} onClick={this.handleClick}>
          <div className={navClasses}>
            <div className="column-100">
              <h1 className='nav-h1'>Choose a Game</h1>
              <ul>
                <li>The Legend of Zelda</li>
                <li>A Link to the Past</li>
                <li>Ocarina of Time</li>
                <li>The Wind Waker</li>
                <li>Breath of the Wild</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
