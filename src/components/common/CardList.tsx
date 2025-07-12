import { Component } from 'react';
import { type SWCharacter } from '../../views/Search';
import Card from './Card';

interface Characters {
  characters: SWCharacter[];
}

class CardList extends Component<Characters, unknown> {
  render() {
    const { characters } = this.props;
    console.log(characters);
    return (
      <div>
        <h2>Characters:</h2>
        <ul className="card-list">
          {characters.map((character) => (
            <Card key={character.uid} character={character} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CardList;
