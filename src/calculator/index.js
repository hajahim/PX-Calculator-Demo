import React, { Component } from 'react'
import CalculatorButton from './buttons/CalculatorButton'
import './Calculator.css'
import PropTypes from 'prop-types'

class Calculator extends Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.resetCalculator = this.resetCalculator.bind(this)
    this.addHistory = this.addHistory.bind(this)
    this.evaluate = this.evaluate.bind(this)
    this.state = {
      aggregator: [],
      history: [],
      value: ''
    }
  }

  handleClick = value => {
    this.setState({
      aggregator: this.state.aggregator.concat(value)
    })
  }

  renderCalculatorButton () {
    const { buttons } = this.props.calculatorInstance
    return (
      buttons.map( (button, index) => {
        const action = button.action ? this[button.action] : this.handleClick
        return ( <CalculatorButton key = {index} clicked = {action} properties = {button} /> )
      })
    )
  }

  addHistory = value => {
    const newHistory = Object.assign([], this.state.history)
    let aggregatorValue = Object.assign([], this.state.aggregator)
    newHistory.push(aggregatorValue.join(''))
    newHistory.push(` ${value} `)
    this.setState({
      history: newHistory,
      aggregator: []
    })
  }

  evaluate () {
    let operator = '+'
    const updateHistory = Object.assign([], this.state.history)
    updateHistory.push(this.state.aggregator.join(''))
    const totalValues = updateHistory.reduce( (aggregate, currentValue) => {
      if ( !/[0-9]/.test(currentValue) ) {
        operator = currentValue
        return parseInt(aggregate) + 0
      } else {
        switch (operator) {
          case ' - ': {
            return parseInt(aggregate) - parseInt(currentValue)
          }
          case ' + ': {
            return parseInt(aggregate) + parseInt(currentValue)
          }
		  case ' / ': {
            return parseInt(aggregate) / parseInt(currentValue)
          }
          default: {
            return parseInt(aggregate) * parseInt(currentValue)
          }
        }
      }
    })
    this.setState({
      history: [],
      aggregator: ( val => { val.push(totalValues); return val; } )([])
    })
  }

  resetCalculator () {
    this.setState({
      history: [],
      aggregator: []
    })
  }

  render () {
    const { history, aggregator } = this.state
    return (
      <section className = "calculator">
        <div className = "calculator-wrapper">
          <div className = "calculator-view">
            <span className = "calculator-history">
              { history.join('') }
            </span>
            <span className = "calculator-aggregator">
              { aggregator.length > 0 ? aggregator.join('') : '0'}
            </span>
          </div>
          <div className = "calculator-button-container">
            { this.renderCalculatorButton() }
          </div>
        </div>
      </section>
    )
  }

}

Calculator.defaultProps = {
  calculatorInstance: {}
};

Calculator.propTypes = {
  calculatorInstance: PropTypes.object
}

export default Calculator