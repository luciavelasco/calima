import * as React from 'react'
import './Service.css'

// import { ServiceImage } from './ServiceImage'

interface IServiceProps {
  // imageUrl: string,
  // order: string,
  serviceTitle: string,
  serviceInfo: JSX.Element[]
}

export class Service extends React.Component<IServiceProps> {
  public render() {
    return (
      <div className="service">
        {/*<ServiceImage imageUrl={this.props.imageUrl}/>*/}
        <div className="service-description">
          <div className="service-card">
            <h2 className="service-title">
              {this.props.serviceTitle}
            </h2>
            <div className="service-info">
              {...this.props.serviceInfo.map((v, i) => ({ ...v, key: i }))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export function addKey(arr: JSX.Element[]): JSX.Element[] {
//   return arr.map((v, i) => ({ ...v, key: i }))
// }
