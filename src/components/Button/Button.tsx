import * as React from 'react';
import './Button.scss';

export class Button extends React.Component<any, {}> {
  public render() {
    return <button className="app-button" type="button">{this.props.children}</button>;
  }
}
