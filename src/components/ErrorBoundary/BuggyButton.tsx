import { Component } from 'react';

interface BuggyButtonProps {
  onTriggerError: () => void;
  isError: boolean;
}

class BuggyButton extends Component<BuggyButtonProps, unknown> {
  render() {
    return (
      <button className="buggy-button" onClick={this.props.onTriggerError}>
        {this.props.isError ? 'Repare!' : 'Destroy!'}
      </button>
    );
  }
}

export default BuggyButton;
