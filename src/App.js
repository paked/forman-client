import React, { Component } from 'react'
import Radium from 'radium'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Radium(App)
