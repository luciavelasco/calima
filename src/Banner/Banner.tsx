import * as React from 'react'
import './Banner.css'

import { CtaSolid } from '../CtaButtons/CtaSolid'

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
        <CtaSolid className={[ 'cta-top' ]} text="Get in touch for..."/>
      </div>
    )
  }
}
