import { Component } from 'react';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import SearchForm from '../components/common/SearchForm';

const BASE_URL = 'https://swapi.tech/api/';

interface Character {
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  skinColor: string;
  height: string;
  mass: string;
  homeworld: string;
}

interface SearchState {
  isLoading: boolean;
  characters: Character[];
  searchTerm: string;
}

class Search extends Component<unknown, SearchState> {
  state: SearchState = {
    isLoading: false,
    characters: [],
    searchTerm: '',
  };

  fetchCharacter = async () => {
    const searchLink = `${BASE_URL}people/?name=${this.state.searchTerm}&expanded=true`;

    try {
      this.setState({ isLoading: true });

      const response = await fetch(searchLink);
      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();

      if (!data.results) throw new Error('Character not found');

      this.setState({ characters: data.results });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount(): void {
    this.setState({ searchTerm: localStorage.getItem('rss:search') || '' });
    console.log(this.state.searchTerm);
    console.log('didMount');
    this.fetchCharacter();
  }

  render() {
    return (
      <div>
        <Header>
          <SearchForm />
        </Header>
        <Main>Results</Main>
      </div>
    );
  }
}

export default Search;
