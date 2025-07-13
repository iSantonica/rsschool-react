import { Component } from 'react';
import { type SWCharacter } from '../../types/character';
import Card from './Card';

interface CardListProps {
  characters: SWCharacter[];
  error: boolean;
}

class CardList extends Component<CardListProps, unknown> {
  render() {
    if (this.props.error)
      throw new Error('Crashable: Test Error from BuggyButton!');
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
