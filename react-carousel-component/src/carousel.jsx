import React from 'react';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      listLength: null,
      carouselImageId: 0
    };
    this.incrementClick = this.incrementClick.bind(this);
    this.decrementClick = this.decrementClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  componentDidMount() {
    this.setState({ listLength: this.props.urls.length - 1 });
    this.autoStep();
  }

  incrementClick(event) {
    if (this.state.carouselImageId === this.state.listLength) {
      this.setState({ carouselImageId: 0 });
    } else if (this.state.listLength !== this.state.carouselImageId) {
      this.setState({ carouselImageId: this.state.carouselImageId + 1 });
    }
    this.stopInterval();
  }

  decrementClick(event) {
    if (this.state.carouselImageId === 0) {
      this.setState({ carouselImageId: this.state.listLength });
    } else if (this.state.carouselImageId !== 0) {
      this.setState({ carouselImageId: this.state.carouselImageId - 1 });
    }
    this.stopInterval();
  }

  dotClick(event) {
    this.setState({ carouselImageId: parseInt(event.currentTarget.id) });
    this.stopInterval();
  }

  autoStep() {
    this.intervalID = setInterval(this.incrementClick, 3000);
  }

  stopInterval() {
    clearInterval(this.intervalID);
    this.autoStep();
  }

  render() {
    const carouselImageId = this.state.carouselImageId;
    return (
      <div>
        <ul>
          {
            this.props.urls.map((url, index) => {
              return (
                <CarouselImage
                  key={url.id}
                  id={url.id}
                  url={url.url}
                  display={this.state.carouselImageId === url.id}
                />
              );
            })
          }
        </ul>
        <p>{carouselImageId}</p>
        <button onClick={this.decrementClick}>
          left
        </button>
        <button onClick={this.incrementClick}>
          right
        </button>

        <ul className='inline'>
          {
            this.props.urls.map((url, index) => {
              return (
                <Dots
                  key={url.id}
                  id={url.id}
                  display={this.state.carouselImageId === url.id}
                  onClick={this.dotClick}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function CarouselImage(props) {
  if (props.display === true) {
    return (
    <li>
      <img src={props.url} />
    </li>
    );
  }
}

function Dots(props) {
  const dotClass = props.display
    ? 'fa-solid fa-circle'
    : 'fa-solid fa-circle-dot';
  return (
    <li id={props.id} onClick={props.onClick}>
      <i className={dotClass}></i>
    </li>
  );
}
