import * as React from 'react';

import './Block.scss';
interface IBlock {
  children: any;
  className: string;
}

export class Block extends React.Component<IBlock, {}> {
  public render() {
    return (
      <section className={'Block ' + this.props.className}>
        {this.props.children}
      </section>
    );
  }
}
