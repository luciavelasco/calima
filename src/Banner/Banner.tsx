import * as React from 'react'
import './Banner.css'

import { CtaSolid } from '../CtaButtons/CtaSolid'

export class Banner extends React.Component {
  public render() {
    return (
      <div className="App-header">
        <div className="header-content">
          <div className="logo-block">
            <h1 className="logo-title">Calima</h1>
          </div>
          <div className="intro-title">
            <p>Process Strategy Consultancy</p>
          </div>
        </div>
        <CtaSolid className={[ 'cta-top' ]} text="Get in touch for..."/>
      </div>
    )
  }
}
