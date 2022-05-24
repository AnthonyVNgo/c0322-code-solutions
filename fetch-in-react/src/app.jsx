import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    const newArr = [];
    const responsePromise = fetch('https://jsonplaceholder.typicode.com/users');
    const dataPromise = responsePromise.then(response => response.json());
    dataPromise.then(data => newArr.push(data));
    this.setState({ isLoading: !this.state.isLoading, users: newArr });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
