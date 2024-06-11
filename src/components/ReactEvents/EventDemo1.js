import React, { Component } from 'react'

export default class EventDemo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 10,
      b: 20,
    };
    this.f1 = this.f1.bind(this);
  };

  f1() {
    console.log(this);
  };

  f2 = () => {
    console.log(this.state.a);
  };
  add = (a, b) => {
    console.log(a + b);
  };
  sum = (a, b) => {
    console.log(a + b);
  }
  render() {
    return (
      <>
        <div>EventDemo1</div>
        <button onClick={this.f1} className='btn btn-primary m-2'>Click me1</button>

        <button onClick={this.f2} className='btn btn-primary m-2'>Click me2</button>

        <button onClick={() => { this.add(this.state.a, this.state.b) }} className='btn btn-primary m-2'>Add</button>

        <button onClick={this.sum.bind(this, this.state.a, this.state.b)} className='btn btn-primary m-2'>SUM</button>

      </>
    )
  }
}
