import * as React from 'react'
import './Services.css'

import * as mess from '../images/above-black-black-and-white-6470.jpg'
import * as blueprint from '../images/art-blueprint-brainstorming-8704.jpg'
import * as gamePieces from '../images/battle-board-game-challenge-209640.jpg'
import * as hourglass from '../images/glass-hourglass-hours-39396.jpg'

export class Services extends React.Component {
  public render() {
    return (
      <div>
        <div className="services">
          <div className="service first">
            <div className="service-image">
              <img src={hourglass}/>
            </div>
            <div className="service-description">
              <div className="service-card">
                <h2 className="service-title">
                  Visibility over project progress
                </h2>
                <p className="service-info">
                  If you're not sure whether you'll meet your deadlines until you hit them I can
                  help implement processes to improve transparency around progress, without
                  micromanaging your team.
                </p>
              </div>
            </div>
          </div>
          <div className="service second">
            <div className="service-image">
              <img src={blueprint}/>
            </div>
            <div className="service-description">
              <div className="service-card">
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
            </div>
          </div>
          <div className="service third">
            <div className="service-image">
              <img src={gamePieces}/>
            </div>
            <div className="service-description">
              <div className="service-card">
                <h2 className="service-title">
                  Autonomous teams
                </h2>
                <p className="service-info">
                  If you’re looking to create autonomous teams and you don’t know where to start
                  If you’re looking to create autonomous teams and you don’t know where to start
                </p>
              </div>
            </div>
          </div>
          <div className="service fourth">
            <div className="service-image">
              <img src={mess}/>
            </div>
            <div className="service-description">
              <div className="service-card">
                <h2 className="service-title">
                  A no-blame culture
                </h2>
                <p className="service-info">
                  If your recruitment process is a revolving door (not so sure about this one),
                  job specs that bring you the people you need

                  OR employee engagement/
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="cta-button" href="mailto:luciakvelasco@gmail.com">Find out more</a>
      </div>
    )
  }
}
