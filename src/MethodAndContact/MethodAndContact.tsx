import * as React from 'react'
import './MethodAndContact.css'

import { CtaFlat } from '../CtaButtons/CtaFlat'

export class MethodAndContact extends React.Component {
  public render() {
    return (
      <div className="method-and-contact">
        <div className="contact">
          <h4 className="contact-title">Lucia Velasco</h4>
          <p>Call me: 07887393021</p>
          <p>Email me: <a href="mailto:luciakvelasco@gmail.com">luciakvelasco@gmail.com</a></p>
          {/*<p>Connect: <a href="mailto:luciakvelasco@gmail.com">LinkedIn/Skype/Facebook(?)/</a></p>*/}
        </div>
        <div className="method">
          <h5 className="method-title">Calima</h5>
          <p>Process Optimisation and Management Consultancy</p>
          <p>Lucia worked in technology for several years, as a software developer
            and as a Scrum Master, where she touched on healthcare, finance,
            travel and energy sectors, among others.
            In that time she has championed Agile Processes and best practice to help her employers grow.</p>
        </div>
        <CtaFlat text="Get in touch!"/>
      </div>
    )
  }
}
