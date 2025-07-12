import { Component } from 'react';
import { type SWCharacter } from '../../types/character';
import Card from './Card';

interface Characters {
  characters: SWCharacter[];
}

class CardList extends Component<Characters, unknown> {
  render() {
    const { characters } = this.props;
    return (
      <div>
        {characters.length ? (
          <ul className="card-list">
            {characters.map((character) => (
              <Card key={character.uid} character={character} />
            ))}
          </ul>
        ) : (
          <p>No Characters to display!</p>
        )}
      </div>
    );
  }
}

export default CardList;
