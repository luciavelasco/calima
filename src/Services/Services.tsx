import * as React from 'react'
import './Services.css'

import * as handshake from '../images/achievement-adult-agreement-327540.jpg'
import * as blueprint from '../images/art-blueprint-brainstorming-8704.jpg'
import * as gamePieces from '../images/battle-board-game-challenge-209640.jpg'
import * as hourglass from '../images/glass-hourglass-hours-39396.jpg'

export class Services extends React.Component {
  public render() {
    return (
      <div>
        <div className="services">
          <div className="service first">
            <img className="service-image" src={blueprint}/>
            <h2 className="service-title">
              Project outcomes that match your expectations
            </h2>
            <p className="service-info">
              If work done isn’t matching your expected outcomes
              If work done isn’t matching your expected outcomes
              If work done isn’t matching your expected outcomes
              If work done isn’t matching your expected outcomes
            </p>
          </div>
          <div className="service second">
            <img className="service-image" src={hourglass}/>
            <h2 className="service-title">
              Visibility over project progress
            </h2>
            <p className="service-info">
              If you're not sure whether you'll meet your deadlines until you hit them I can
              help implement processes to improve transparency around progress, without
              micromanaging your team.
            </p>
          </div>
          <div className="service third">
            <img className="service-image" src={handshake}/>
            <h2 className="service-title">
              A no-blame culture
            </h2>
            <p className="service-info">
              If your recruitment process is a revolving door (not so sure about this one),
              job specs that bring you the people you need

              OR employee engagement/
            </p>
          </div>
          <div className="service fourth">
            <img className="service-image" src={gamePieces}/>
            <h2 className="service-title">
              Autonomous teams
            </h2>
            <p className="service-info">
              If you’re looking to create autonomous teams and you don’t know where to start
              If you’re looking to create autonomous teams and you don’t know where to start
            </p>
          </div>
        </div>
        <a className="cta-button" href="mailto:luciakvelasco@gmail.com">Find out more</a>
      </div>
    )
  }
}
