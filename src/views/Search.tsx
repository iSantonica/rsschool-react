import { Component } from 'react';

import { type SWCharacter } from '../types/character';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import SearchForm from '../components/common/SearchForm';
import CardList from '../components/common/CardList';
import Loader from '../components/common/Loader';
import Footer from '../components/layout/Footer';
import BuggyButton from '../components/ErrorBoundary/BuggyButton';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const BASE_URL = 'https://swapi.tech/api/';

interface SearchState {
  isLoading: boolean;
  characters: SWCharacter[];
  searchTerm: string;
  triggerError: boolean;
}

class Search extends Component<unknown, SearchState> {
  constructor(props: unknown) {
    super(props);

    const savedSearchTerm = localStorage.getItem('rss:search') || '';

    this.state = {
      isLoading: false,
      characters: [],
      searchTerm: savedSearchTerm,
      triggerError: false,
    };
  }

  handleError = () => {
    const error = this.state.triggerError ? false : true;
    this.setState({ triggerError: error });
  };

  fetchCharacter = async (): Promise<void> => {
    const searchTerm = this.state.searchTerm;
    const searchLink = `${BASE_URL}people/?name=${searchTerm}&expanded=true`;

    try {
      this.setState({ isLoading: true });

      const response = await fetch(searchLink);
      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();

      if (!data.results && !data.result)
        throw new Error(data.message || 'Character not found');

      const searchResults = searchTerm ? data.result : data.results;

      this.setState({ characters: searchResults });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeSearch = (term: string): void => {
    this.setState({ searchTerm: term });
  };

  async componentDidMount(): Promise<void> {
    this.fetchCharacter();
  }

  async componentDidUpdate(
    _prevProps: unknown,
    prevState: Readonly<SearchState>
  ): Promise<void> {
    if (prevState.searchTerm !== this.state.searchTerm) {
      localStorage.setItem('rss:search', this.state.searchTerm);
      await this.fetchCharacter();
    }
  }

  render() {
    return (
      <div className="search-page">
        <Header>
          <SearchForm
            searchTerm={this.state.searchTerm}
            onChangeSearch={this.handleChangeSearch}
          />
        </Header>
        <Main>
          <ErrorBoundary
            key={this.state.triggerError ? 'error' : 'no-error'}
            fallback={
              <p className="fallback-error">Something went wrong (test)!!!</p>
            }
          >
            <h2>Characters:</h2>
            {this.state.isLoading ? (
              <Loader />
            ) : (
              <CardList
                characters={this.state.characters}
                error={this.state.triggerError}
              />
            )}
          </ErrorBoundary>
        </Main>
        <Footer>
          <BuggyButton
            onTriggerError={this.handleError}
            isError={this.state.triggerError}
          />
        </Footer>
      </div>
    );
  }
}

export default Search;
