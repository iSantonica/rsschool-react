import { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form className="search-form">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
