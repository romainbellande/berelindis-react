import * as React from 'react';

import './Home.scss';

import { Button } from '../../components';
import { Dna } from './Dna';
import { Identity } from './Identity';
import { Navbar } from './Navbar';
import { Skills } from './Skills';
import { Title } from './Title';

export class Home extends React.Component<null, {}> {
  public render() {
    return (
      <section className="Home">
        <section className="Home__left">
          <Identity/>
          <Dna/>
        </section>
        <section className="Home__center">
          <Title/>
        </section>
        <section className="Home__right">
          <Navbar/>
          <Skills/>
          <Button>Text</Button>
        </section>
      </section>
    );
  }
}
