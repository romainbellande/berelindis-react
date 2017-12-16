import * as React from 'react';

import './ProgressBar.scss';
export interface IProgressBar {
  value: number;
}

export class ProgressBar extends React.Component<IProgressBar, null> {
  public render() {
    return (
      <div className="ProgressBar">
        <hr className="ProgressBar__interior" style={this.setWidth()}/>
      </div>
    );
  }

  public setWidth(): {} {
    return {
      maxWidth: this.props.value + '%',
    };
  }
}
