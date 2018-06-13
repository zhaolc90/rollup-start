// import './Button.less'
import React from 'react'
import PropTypes from 'prop-types'

export default class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
