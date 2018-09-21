import * as React from 'react'
import './Services.css'

import * as mess from '../images/above-black-black-and-white-6470.jpg'
import * as blueprint from '../images/art-blueprint-brainstorming-8704.jpg'
import * as gamePieces from '../images/battle-board-game-challenge-209640.jpg'
import * as hourglass from '../images/glass-hourglass-hours-39396.jpg'
import { Service } from './Service'

export class Services extends React.Component {
  public render() {
    return (
      <div>
        <div className="services">
          <Service order="first"
                   imageUrl={hourglass}
                   serviceTitle="Visibility over project progress"
                   serviceInfo="If you're not sure whether you'll meet your deadlines until you hit them I can
                  help implement processes to improve transparency around progress, without
                  micromanaging your team."
          />
          <Service order="second"
                   imageUrl={blueprint}
                   serviceTitle="Project outcomes that match your expectations"
                   serviceInfo="If work done isn’t matching your expected outcomes
                  If work done isn’t matching your expected outcomes
                  If work done isn’t matching your expected outcomes
                  If work done isn’t matching your expected outcomes"
          />
          <Service order="third"
                   imageUrl={gamePieces}
                   serviceTitle="Autonomous teams"
                   serviceInfo="If you’re looking to create autonomous teams and you don’t know where to start
                  If you’re looking to create autonomous teams and you don’t know where to start"
          />
          <Service order="fourth"
                   imageUrl={mess}
                   serviceTitle="A no-blame culture"
                   serviceInfo="If your recruitment process is a revolving door (not so sure about this one),
                  job specs that bring you the people you need

                  OR employee engagement/"
          />
        </div>
        {/*<a className="cta-button" href="mailto:luciakvelasco@gmail.com">Find out more</a>*/}
      </div>
    )
  }
}
