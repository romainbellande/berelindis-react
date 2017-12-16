import * as React from 'react';

import { Block, ProgressBar } from '../../../components';
import './Skills.scss';

export interface ISKill {
  name: string;
  value: number;
}

export class Skills extends React.Component<null, {}> {
  public render() {
    return (
      <Block className="Skills">
        <ul className="Skills__list">{this.getSkills()}</ul>
      </Block>
    );
  }

  public getSkills(): JSX.Element[] {
    const skills: ISKill[] = [
      { name: 'angular', value: 80 },
      { name: 'scss', value: 70 },
      { name: 'node', value: 60 },
    ];
    return skills.map((skill, i) => (
      <li
        className="Skills__list__item"
        key={skill.name + i}
      >
        {skill.name}
        <ProgressBar value={skill.value}/>
      </li>
    ));
  }
}
