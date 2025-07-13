import { Component } from 'react';
import { type SWCharacter } from '../../types/character';

interface CardProps {
  character: SWCharacter;
}

class Card extends Component<CardProps, unknown> {
  render() {
    const { character } = this.props;
    const {
      name,
      birth_year,
      gender,
      height,
      mass,
      hair_color,
      eye_color,
      skin_color,
    } = character.properties;

    return (
      <li className="card">
        <h2 className="card__name">{name}</h2>
        <ul className="card__details">
          <li>
            <strong>Birth year:</strong> {birth_year}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Height:</strong> {height} cm
          </li>
          <li>
            <strong>Mass:</strong> {mass} kg
          </li>
          <li>
            <strong>Hair color:</strong> {hair_color}
          </li>
          <li>
            <strong>Eye color:</strong> {eye_color}
          </li>
          <li>
            <strong>Skin color:</strong> {skin_color}
          </li>
        </ul>
      </li>
    );
  }
}

export default Card;
