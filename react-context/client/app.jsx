import React from 'react';
import jwtDecode from 'jwt-decode';
import AppContext from './lib/app-context';
import parseRoute from './lib/parse-route';
import Auth from './pages/auth';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Navbar from './components/navbar';
import PageContainer from './components/page-container';

// App is the child / derived class class
// React.Component is the parent / base class being extended
// the App class component inherits the functionality from the React.Component parent / base class
// extending the Component class gives access to Component Lifecycle methods, such as
// constructor(), render(), componentDidMount()
// reference: https://stackoverflow.com/questions/52585851/why-we-do-extends-react-component-when-creating-the-class-component-in-react#:~:text=Extending%20Component%20will%20give%20you,%2C%20componentDidUpdate%20%2C%20componentWillUnmount%20and%20render%20.&text=is%20not%20useful-,Show%20activity%20on%20this%20post.,used%20for%20mounting%20and%20unmounting.

// Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
// not 100% what that means

// the class component App is being defined?
// the class component App utilizes the constructor method because we are going to initialize state and methods for event handling
// If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
// reference: https://reactjs.org/docs/react-component.html
// the class component App is initialized with state, and an object with 3 key value paires, user: null, isAuthorizing: true, route: parseRoute(window.location.hash) is assigned to this.state
// the methods handleSignIn and handleSignOut are bound to the class component App

// the handleSignIn method / event handler has a parameter result

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === '') {
      return <Home />;
    }
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth />;
    }
    return <NotFound />;
  }

  render() {
    if (this.state.isAuthorizing) return null;
    const { user, route } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Navbar />
          <PageContainer>
            { this.renderPage() }
          </PageContainer>
        </>
      </AppContext.Provider>
    );
  }
}
