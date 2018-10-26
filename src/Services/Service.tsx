import * as React from 'react'
import './Service.css'

interface IServiceProps {
  // imageUrl: string,
  serviceTitle: string,
  serviceInfo: JSX.Element[]
}

export class Service extends React.Component<IServiceProps> {
  public render() {
    return (
      <div className="service">
        <h2>
          {this.props.serviceTitle}
        </h2>
        {...this.props.serviceInfo}
      </div>
    )
  }
}
