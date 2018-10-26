import * as React from 'react'
import './MethodAndContact.css'

import * as headshot from '../images/IMG_20181011_143627 2.jpg'
import * as contact from '../images/Screen Shot 2018-10-26 at 19.45.25.png'

import { CtaFlat } from '../CtaButtons/CtaFlat'

export class MethodAndContact extends React.Component {

  public render() {
    return (
      <div>
        <div className="method-and-contact">
          <div className="contact">
            {/*<h4 className="contact-title">Lucia Velasco</h4>*/}
            <img className="headshot" src={headshot} alt="Lucia Velasco"/>
            <a href="mailto:luciakvelasco@gmail.com">
              <img className="contact-details" src={contact} alt="Call me: 07887393021. Email me: luciakvelasco@gmail.com."/>
            </a>
            {/*<p>Connect: <a href="mailto:luciakvelasco@gmail.com">LinkedIn/Skype/Facebook(?)/</a></p>*/}
          </div>
          <div className="method">
            <p>
              Calima helps companies do what they do, faster and better. Too many businesses have
              painful processes; with Calima's help these will just be the growing pains to a smoother, more efficient
              workflow that lets you focus on doing what you do best.
            </p>
            <p>
              Lucia is the Director and Lead Consultant at Calima. She has a background in technology,
              across sectors such as healthcare, finance, travel and energy. Through her work at award winning SMEs and
              innovative startups she discovered and championed a passion for best practice and Agile methodology. She
              decided to found Calima to share her expertise across the globe.
            </p>
          </div>
        </div>
        <CtaFlat text="Get in touch!"/>
      </div>
    )
  }
}
