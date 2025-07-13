import { Component } from 'react';
import Search from './views/Search';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary
        fallback={<p className="fallback-error">All went wrong!!!</p>}
      >
        <Search />
      </ErrorBoundary>
    );
  }
}

export default App;
