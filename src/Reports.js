import React, { Component } from 'react'
import Radium from 'radium'
import colors from './colors'
import { default as defaultStyles } from './styles';

var styles = {
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  listItem: {
    fontSize: '20px',
    backgroundColor: colors.red,
    color: 'white',
    paddingLeft: '15px',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderBottom: `2px solid ${colors.gray}`
  },
  actionItem: {
    backgroundColor: colors.darkRed
  }
}

class Reports extends Component {
  render() {
    return (
      <div style={defaultStyles.base}>
        <ul style={styles.list}>
          <li style={[styles.listItem, styles.actionItem]}>
            New report
          </li>
          <li style={styles.listItem}>
            JANUARY
          </li>
          <li style={styles.listItem}>
            FEBRUARY
          </li>
        </ul>
      </div>
    )
  }
}

export default Radium(Reports)
