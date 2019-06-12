import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Calculator from './calculator'
import data from './calculator_config.json'

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
      <div className = "page-wrapper">
        <header className = "l-heading">
          <img src = {logo} className = "l-heading-logo" alt = "logo" />
        </header>
        <main className = "l-main">
          <Calculator calculatorInstance = {calculator} />
        </main>
        <footer className = "l-footer">
        </footer>
      </div>
    )
  }

}

export default App