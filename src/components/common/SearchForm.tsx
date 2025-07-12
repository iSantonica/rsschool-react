import { Component, type ChangeEvent, type FormEvent } from 'react';

interface SearchFormState {
  search: string;
}

interface SearchFormProps {
  searchTerm: string;
  onChangeSearch: (term: string) => void;
}

class SearchForm extends Component<SearchFormProps, SearchFormState> {
  state: SearchFormState = {
    search: '',
  };

  componentDidMount(): void {
    const searchString = this.props.searchTerm;
    if (searchString) {
      this.setState({ search: searchString });
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchString = this.state.search.trim();
    if (searchString) {
      this.props.onChangeSearch(searchString);
    }
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
