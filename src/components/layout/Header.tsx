import { Component } from 'react';
import type { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

class Header extends Component<HeaderProps> {
  render() {
    return <header className="header">{this.props.children}</header>;
  }
}

export default Header;
