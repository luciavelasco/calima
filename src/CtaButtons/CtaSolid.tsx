import * as React from 'react'

import './CtaSolid.css'

export class CtaSolid extends React.Component<{ text: string, className?: string[] }> {
  public render() {
    const classes = this.props.className || []
    classes.push('cta-solid')
    const className = classes.join(' ')
    return <a className={className} href="mailto:luciakvelasco@gmail.com">{this.props.text}</a>
  }
}
