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
  }

  componentDidMount() {
    this.setState({ listLength: this.props.urls.length });
  }

  incrementClick(event) {
    if (this.state.carouselImageId === this.state.listLength) {
      this.setState({ carouselImageId: 0 });
    } else if (this.state.listLength !== this.state.carouselImageId) {
      this.setState({ carouselImageId: this.state.carouselImageId + 1 });
    }
  }

  decrementClick(event) {
    if (this.state.carouselImageId === 0) {
      this.setState({ carouselImageId: this.state.listLength });
    } else if (this.state.carouselImageId !== 0) {
      this.setState({ carouselImageId: this.state.carouselImageId - 1 });
    }
  }

  render() {
    const carouselImageId = this.state.carouselImageId;
    return (
      <div>
        <p>{carouselImageId}</p>
        <button onClick={this.decrementClick}>
          left
        </button>
        <button onClick={this.incrementClick}>
          right
        </button>
      </div>
    );
  }
}

// function CarouselImage(props) {
//   return (
//     <li>
//       <img src={props.url} />
//     </li>
//   );
// }
/* <div className="container">
  <div className='column'>
    <ul>
      {
        this.props.urls.map((url, index) => {
          return (
            <CarouselImage
              key={index}
              id={url.id}
              url={url.url}
            />
          );
        })
      }
    </ul>
  </div>
  <div>
    <button>
      left
    </button>
    <button>
      right
    </button>
  </div>
</div> */
