import * as React from 'react'
import './App.css'
import { Banner } from './Banner/Banner'
import { MethodAndContact } from './MethodAndContact/MethodAndContact'
import { Services } from './Services/Services'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Banner/>
        <Services/>
        <MethodAndContact/>
      </div>
    )
  }
}

export default App
