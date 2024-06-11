import React, { Component } from 'react'

export default class Greet2 extends Component {
  render() {
    if(this.props.showTitle){
        alert('True Value');
    }else{
        alert('False Value');
    }
    return (
        <>
      <div>This is Class Components in Props </div>
      <div>Hello {this.props.name}, {this.props.msg}, {this.props.showTitle}</div>
      <button onClick={this.props.f1}>Click me</button>
      </>
    )
  }
}
