import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Calculator from './calculator'
import data from './calculator_config.json'
import { Bounce, Zoom } from 'react-reveal'

class App extends Component {

  constructor () {
    super()
    this.state = {
      calculator: {}
    }
  }

  componentWillMount () {
    this.setState({
      calculator: data
    })
  }

  render () {
    const { calculator } = this.state
    return (
      <div className = "l-layout">
        <header className = "l-heading">
          <div className = "l-page-container">
            <img src = {logo} className = "l-heading-logo" alt = "logo" />
            React Calculator Demo
          </div>
        </header>
        <main className = "l-main">
          <div className = "l-page-container">
            <Bounce left>
              This is an example application with React JS.
              <ul className = "l-list">
                <li className = "l-list-item"> Layout for page can be found in <code> /App.js </code></li>
                <li className = "l-list-item"> Module Calculator has been implement in <code> /calculator/index.js </code></li>
                <li className = "l-list-item"> We implement a submodule for button in <code> /calculator/buttons/CalculatorButton.js </code></li>
                <li className = "l-list-item"> Calculator can be configured in <code> calculator_config.json </code></li>
              </ul>
            </Bounce>
            <Zoom top>
              <Calculator calculatorInstance = {calculator} />
            </Zoom>
          </div>
        </main>
        <footer className = "l-footer">
          <div className = "l-page-container">
            © 2019 – RAJAONARIVELO Ravoatra Mihaja – Front End Developer | All Rights Reserved
          </div>
        </footer>
      </div>
    )
  }

}

export default App