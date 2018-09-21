import * as React from 'react'
import './ServiceImage.css'

export class ServiceImage extends React.Component<{ imageUrl: string }> {

  // public componentDidMount() {
  //   this.animateHTML().init()
  // }

  public render() {
    return (
      <div className="service-image">
        <img src={this.props.imageUrl}/>
        <div className="image-cover hidden"/>
      </div>
    )
  }

  // private animateHTML = () => {
  //   let elems: NodeListOf<Element>
  //   let windowHeight: any
  //   function init() {
  //     elems = document.querySelectorAll('.image-cover')
  //     windowHeight = window.innerHeight
  //     addEventHandlers()
  //     checkPosition()
  //   }
  //   function addEventHandlers() {
  //     window.onscroll = checkPosition
  //     window.onresize = init
  //   }
  //   function checkPosition() {
  //     for (let i = 0; i < elems.length; i++) {
  //       const positionFromTop = elems.item(i).getBoundingClientRect().top
  //       if (positionFromTop - windowHeight <= 0) {
  //         // tslint:disable-next-line:no-console
  //         console.log('It\'s visible!')
  //         // tslint:disable-next-line:no-console
  //         console.log(elems.item(i))
  //         elems.item(i).className = 'image-cover visible'
  //       } else {
  //         // tslint:disable-next-line:no-console
  //         console.log('It\'s invisible!')
  //         // tslint:disable-next-line:no-console
  //         console.log(elems.item(i))
  //         elems.item(i).className = 'image-cover hidden'
  //       }
  //     }
  //   }
  //   return { init }
  // }

}







// const appArray = document.getElementsByClassName('App')
// const app = appArray.length ? appArray.item(0) : { scrollTop: 'N/A' }
// const images = document.getElementsByClassName('service-image')
// const image = images.length ? images.item(0) : {scrollTop: 0}
// document.body.appendChild(section);
// for (let x = 1; x <= 100; x ++) {
//   let d = document.createElement('div');
//   d.innerText = `Hello there div line ${x} of 100`;
//   section.appendChild(d);
// }

// function inView (el: Element) {
// const
// const theImage = image.getBoundingClientRect();
// const currentImage = el.getBoundingClientRect();
// return !((currentImage.top + currentImage.height < 0) || (eb.top > theImage.height));
// }

// function updateInView() {
//   // for (x of document.querySelectorAll('div')) {
//   const winHeight = window.innerHeight
//
//   // Annoying to compute doc height due to browser inconsistency
//   const body = document.body
//   const html = document.documentElement
//   const docHeight = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight)

  // const value = document.body.scrollTop

// // tslint:disable-next-line:no-console
//   console.log('Height: ', docHeight)
//   // tslint:disable-next-line:no-console
//   console.log('Inner Height: ', winHeight)
//   // tslint:disable-next-line:no-console
//   console.log('ScrolledTo: ', app.scrollTop)
  // tslint:disable-next-line:no-console
  // console.log('Image at: ', image)

  // if (inView(image)) image.classList.add('inview')
  // else image.classList.remove('inview');
  // }
// }

// document.onscroll = updateInView
//
// updateInView()
