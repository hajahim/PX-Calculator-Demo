import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CalculatorButtons extends Component {

  constructor () {
    super()
    this.listenClick = this.listenClick.bind(this)
  }

  listenClick = event => {
    event.preventDefault()
    const { properties } = this.props
    const value = properties.value || properties.label 
    this.props.clicked(value)
  }

  render () {
    const { properties } = this.props
    return (
      <button className = "calculator-button"  onClick = {this.listenClick}>
        { properties.label }
      </button>
    )
  }

}

CalculatorButtons.defaultProps = {
  properties: {}
};

CalculatorButtons.propTypes = {
  properties: PropTypes.object,
  clicked: PropTypes.func
}

export default CalculatorButtons
