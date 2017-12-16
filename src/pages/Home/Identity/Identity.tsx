import * as React from 'react';
import Typist from 'react-typist';

import { Block } from '../../../components';
import './Identity.scss';

interface IListItem {
  label: string;
  text: string;
}

export class Identity extends React.Component<null, {}> {

  public getListItem(): JSX.Element[] {
    const list: IListItem[] = [
      { label: 'First Name', text: 'Romain' },
      { label: 'Last Name', text: 'Bellande' },
      { label: 'Age', text: '23 years' },
    ];

    return list.map((item, i) => (
      <li key={item.label + i} className="app-identity__list__item">
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 200 }}>
            {item.label}: <span>{item.text}</span>
        </Typist>
      </li>
    ));
  }
  public render() {
    return (
      <Block className="Identity">
        <ul className="Identity__list">
          {this.getListItem()}
        </ul>
      </Block>
    );
  }
}
