import { Component } from 'react';

class BuggyButton extends Component {
  handleClick = () => {
    throw new Error('Error from BuggyButton!');
  };

  render() {
    return (
      <button className="buggy-button" onClick={this.handleClick}>
        Destroy!
      </button>
    );
  }
}

export default BuggyButton;
