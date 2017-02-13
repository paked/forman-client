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
    fontWeight: 'bold',
    backgroundColor: colors.white,
    color: 'black',
    paddingLeft: '15px',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderBottom: `2px solid ${colors.gray}`
  },
  header: {
    backgroundColor: colors.red,
    color: colors.white,
    paddingTop: '1vh',
    paddingBottom: '1.5vh',
    paddingLeft: '2vh',
    paddingRight: '2vh',
    overflow: 'hidden',
    borderBottom: `2px solid ${colors.black}`,
    title: {
      margin: 0,
      display: 'inline'
    },
    add: {
      float: 'right',
      border: `1.5px solid ${colors.white}`,
      borderRadius: '3px',
      paddingLeft: '3vh',
      paddingRight: '3vh',
    }
  }
}

class Reports extends Component {
  render() {
    return (
      <div style={defaultStyles.base}>
        <div style={styles.header}>
          <h1 style={styles.header.title}>
            Reports
          </h1>

          <h1 style={[styles.header.add, styles.header.title]}>+</h1>
        </div>

        <ul style={styles.list}>
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
