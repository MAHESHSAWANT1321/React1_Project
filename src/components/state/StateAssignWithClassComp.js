import React, { Component } from 'react'

export default class StateAssignWithClassComp extends Component {

    state={
        flag:true
    };
    chnageFalg = () => {
        this.setState({flag:!this.state.flag})
    };

  render() {
    return<>
    {this.state.flag ? <p>This is paragraph</p> : null}
    <button onClick={this.chnageFalg}>
        {this.state.flag ? 'HIDE' : 'SHOW'}
    </button>
    </>
  }
}
