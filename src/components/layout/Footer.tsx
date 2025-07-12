import { Component } from 'react';
import type { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

class Footer extends Component<FooterProps> {
  render() {
    return <footer className="footer">{this.props.children}</footer>;
  }
}

export default Footer;
