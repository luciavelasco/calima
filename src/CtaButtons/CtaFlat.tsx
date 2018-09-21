import * as React from 'react'
import './CtaFlat.css'

export class CtaFlat extends React.Component<{ text: string }> {
  public render() {
    return <a className="cta-flat" href="mailto:luciakvelasco@gmail.com">{this.props.text}</a>
  }
}
