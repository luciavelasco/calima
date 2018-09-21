import * as React from 'react'
import './Service.css'

import { ServiceImage } from './ServiceImage'

interface IServiceProps {
  imageUrl: string,
  order: string,
  serviceTitle: string,
  serviceInfo: string
}

export class Service extends React.Component<IServiceProps> {
  public render() {
    return (
      <div className={`service ${this.props.order}`}>
        <ServiceImage imageUrl={this.props.imageUrl}/>
        <div className="service-description">
          <div className="service-card">
            <h2 className="service-title">
              {this.props.serviceTitle}
            </h2>
            <p className="service-info">
              {this.props.serviceInfo}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
