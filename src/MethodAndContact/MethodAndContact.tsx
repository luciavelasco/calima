import * as React from 'react'
import './MethodAndContact.css'

export class MethodAndContact extends React.Component {
  public render() {
    return (
      <div className="method-and-contact">
        <div className="contact">
          <h4 className="contact-title">Calima</h4>
          <p>Lucia Velasco</p>
          <a className="cta-button" href="mailto:luciakvelasco@gmail.com">Get in touch if...</a>
        </div>
        <div className="method">
          <h5 className="method-title">Calima</h5>
          <p>Process Optimisation and Management Consultancy</p>
        </div>
      </div>
    )
  }
}
