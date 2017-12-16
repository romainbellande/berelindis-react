import * as React from 'react';

import { Block } from '../../../components';
import './Navbar.scss';

export class Navbar extends React.Component<null, {}> {
  public render() {
    return (
      <Block className="Navbar">
        <nav className="Navbar__list">
          <div className="Navbar__list__item">Home</div>
          <div className="Navbar__list__item">Blog</div>
        </nav>
      </Block>
    );
  }
}
