import React, { Component } from 'react'
import Radium from 'radium'
import colors from './colors'
import { browserHistory } from 'react-router';
import { default as defaultStyles } from './styles'

var styles = {
  base: {
    textAlign: 'center'
  },
  header: {
    paddingTop: '2vh',
    backgroundColor: colors.red,
    height: '33vh'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold'
  },
  input: {
    fontSize: '16px',
    marginBottom: '1vh',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    paddingTop: '0.5vh',
    paddingBottom: '0.5vh',
    border: '1px solid rgb(192, 192, 192)',
    borderRadius: '3px',
    width: '60%'
  },
  button: {
    fontSize: '24px',
    marginTop: '15px',
    border: `1px solid ${colors.white}`,
    borderRadius: '3px',
    backgroundColor: colors.red,
    color: colors.white,
    fontWeight: 'bold'
  },
  copy: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    lead: {
      fontWeight: 'bold'
    }
  }
}

class Login extends Component {
  render() {
    return (
      <div style={[defaultStyles.base, styles.base]}>
        <div style={styles.header}>
          <h1 style={styles.title}>FORMAN</h1>

          <input style={styles.input} type="email" placeholder="me@email.com"/>
          <br />

          <input style={styles.input} type="password" placeholder="hunter4"/>
          <br />

          <button style={styles.button} onClick={this.handleLogin}>CONTINUE</button>
        </div>

        <div style={styles.copy}>
          <p style={styles.copy.lead}>Forman is a super simple receipt tracking, name taking, ass kicking reimbursement app.</p>
        
          <p>It does those 3 things, and that's it – no REVOLUTIONARY HAIR DRESSING or WORLD CHANGING SUITCASE STEALING.</p>

          <h6>Built by Harrison Shoebridge with :love:</h6>
        </div>
      </div>
    )
  }

  handleLogin = (e) => {
    browserHistory.push('/reports');
  }
}

export default Radium(Login)
