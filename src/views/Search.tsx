import { Component } from 'react';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import SearchForm from '../components/common/SearchForm';
import CardList from '../components/common/CardList';

const BASE_URL = 'https://swapi.tech/api/';

export interface SWCharacter {
  uid: string;
  properties: {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    skin_color: string;
    height: string;
    mass: string;
  };
}

interface SearchState {
  isLoading: boolean;
  characters: SWCharacter[];
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
        <Main>
          <CardList characters={this.state.characters} />
        </Main>
      </div>
    );
  }
}

export default Search;
