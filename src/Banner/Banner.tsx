import * as React from 'react'
import './Banner.css'

export class Banner extends React.Component {
  public render() {
    return (
      <div className="App-header">
        <div className="logo-block">
          <h1 className="logo-title">Calima</h1>
        </div>
        <div className="intro-title">
          <p>Lucia Velasco</p>
          <p>Process Optimisation and Management Consultancy</p>
        </div>
        <a className="cta-button" href="mailto:luciakvelasco@gmail.com">Get in touch for...</a>
      </div>
    )
  }
}
