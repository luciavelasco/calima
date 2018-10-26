import * as React from 'react'
import './Services.css'

// import * as mess from '../images/above-black-black-and-white-6470.jpg'
// import * as blueprint from '../images/art-blueprint-brainstorming-8704.jpg'
// import * as gamePieces from '../images/battle-board-game-challenge-209640.jpg'
// import * as hourglass from '../images/glass-hourglass-hours-39396.jpg'
import { Service } from './Service'

export class Services extends React.Component {
  private key: number

  public render() {
    return (
      <div>
        <div className="services">
          {/*<div className="image-band">*/}
          {/*<img src={gamePieces}/>*/}
          {/*<img src={hourglass}/>*/}
          {/*</div>*/}
          <Service serviceTitle="1 Day Workshops"
                   serviceInfo={[
                     <p key={this.key++}>In the Meetings Mastery workshop we cover how to run a clear, engaging and
                       productive meeting.
                       We will study how to set up a meeting efficiently, run an inclusive discussion and establish
                       actionable outcomes. We will also discuss the amount of time a meeting should take, the number of
                       people to invite and whether you should be running a meeting in the first place.</p>,
                     <p key={this.key++}> I also offer workshops on Communication In Teams and Workflow Charting. I can
                       develop custom
                       workshops for your business needs.</p>,
                     <p key={this.key++}> To find out more, get in touch.</p>
                   ]}
          />
          {/*<img src={hourglass}/>*/}
          {/*<img className="service-image" src={blueprint}/>*/}
          {/*<img className="service-image" src={mess}/>*/}
          <Service serviceTitle="Tailored Solutions"
                   serviceInfo={[
                     <p key={this.key++}>We create tailored strategies for your operation. As our primary services we:</p>,
                     <ul key={this.key++}>
                       <li>Document and standardise existing workflows</li>
                       <li>Define your strategy for integrating or updating a process</li>
                       <li>Identify improvement points in your current system</li>
                     </ul>,

                     <p key={this.key++}>We understand that businesses are made up of people and moving parts. Your company is constantly
                       evolving, so our solutions have iteration built in and are unique to you.</p>
                   ]}
          />

          {/*<Service order="third"*/}
          {/*imageUrl={gamePieces}*/}
          {/*serviceTitle="Autonomous teams"*/}
          {/*serviceInfo="If you’re looking to create autonomous teams and you don’t know where to start*/}
          {/*If you’re looking to create autonomous teams and you don’t know where to start"*/}
          {/*/>*/}
          {/*<Service order="fourth"*/}
          {/*imageUrl={mess}*/}
          {/*serviceTitle="A no-blame culture"*/}
          {/*serviceInfo="If your recruitment process is a revolving door (not so sure about this one),*/}
          {/*job specs that bring you the people you need*/}

          {/*OR employee engagement/"*/}
          {/*/>*/}
        </div>
        {/*<a className="cta-button" href="mailto:luciakvelasco@gmail.com">Find out more</a>*/}
      </div>
    )
  }
}
