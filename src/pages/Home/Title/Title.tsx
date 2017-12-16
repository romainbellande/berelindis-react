import * as React from 'react';

import { Block } from '../../../components';
import './Title.scss';

export class Title extends React.Component<null, {}> {
  public render() {
    return (
      <Block className="Title">
        <h1 className="Title__content">
          Romain Bellande
        </h1>
      </Block>
    );
  }
}
