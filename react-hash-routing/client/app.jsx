import React from 'react';
import Header from './components/header';
import Catalog from './pages/catalog';
import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  // function parseRoute(hashRoute) {
  //   if (hashRoute.startsWith('#')) {
  //     hashRoute = hashRoute.replace('#', '');
  //   }
  //   const [path, queryString] = hashRoute.split('?');
  //   const params = new URLSearchParams(queryString);
  //   return { path, params };
  // }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });

    // addEventListener needs an event 'hashchange' and a callback function

    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     */
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Catalog />;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        <Header />
        { this.renderPage() }
      </>
    );
  }
}
