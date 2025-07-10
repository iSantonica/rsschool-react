import { Component } from 'react';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import SearchForm from './components/common/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <SearchForm />
        </Header>
        <Main>Results</Main>
      </div>
    );
  }
}

export default App;
