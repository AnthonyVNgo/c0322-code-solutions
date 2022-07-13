import React from 'react';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

function CarouselImage(props) {
  return (
    <li>
      {/* <p>image goes here</p> */}
      <img src={props.url} />
    </li>
  );
}
