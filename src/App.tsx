import './App.css';
import { Component } from 'react';

import Header from './components/layout/Header';
import Main from './components/layout/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Search</Header>
        <Main>Results</Main>
      </div>
    );
  }
}

export default App;
