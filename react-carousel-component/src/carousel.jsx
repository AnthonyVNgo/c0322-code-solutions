import React from 'react';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="container">
        <ul>
          {
            this.props.urls.map((url, index) => {
              return (
                <CarouselImage
                  key={index}
                  id={url.id}
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
  return (
    <li>
      <p>image goes here</p>
    </li>
  );
}
