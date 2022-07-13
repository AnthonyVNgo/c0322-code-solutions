import React from 'react';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  componentDidMount() {
    this.setState({ listLength: this.props.urls.length });
  }

  render() {
    const carouselImageId = 0;

    return (
      <div>
        <p>{carouselImageId}</p>
        <button>
          left
        </button>
        <button>
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
