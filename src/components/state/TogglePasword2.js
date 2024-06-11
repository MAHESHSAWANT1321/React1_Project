import React, { Component } from 'react'

export default class TogglePasword2 extends Component {
    state={
        flag:false
    }
    setPassword = () => {
        this.setState({ flag: !this.state.flag })
    }

  render() {
    return <>
    
    <input type={this.flag ? 'Password' : 'text'}/>
    <button onClick={this.setPassword}>
        {!this.state.flag ? 'Hide' : 'Show'}
    </button>

        {/* <input type='checkbox' onChange={this.setPassword}/>
        {!this.flag ? 'Hide' : 'Show'} */}
    </>
  }
}
