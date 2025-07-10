import { Component } from 'react';
import type { ReactNode } from 'react';

interface MainProps {
  children?: ReactNode;
}

class Main extends Component<MainProps> {
  render() {
    return <main className="main">{this.props.children}</main>;
  }
}

export default Main;
