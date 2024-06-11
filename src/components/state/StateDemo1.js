import React, { Component } from 'react'

export default class StateDemo1 extends Component {
    // counter = 0;//Class variable
    state = {
        counter: 0,
    };

    increment = () => {
        //To update the state call setState() method.
        // this.setState({ counter: this.state.counter + 1 }, () => {
        //     console.log('Value updated', this.state.counter);
        // })//Asynchronous Oprations.

        // console.log('Normal exicution',this.state.counter);

        this.setState((privetState)=>({
            counter:privetState.counter + 1
        }));
        
    }
    incrementCountFiveTimes = () =>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }

    render() {
        // console.log('Render method Run...');
        return (
            <>
                <div>StateDemo1 Counter is: {this.state.counter}</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.incrementCountFiveTimes}>Increment 5 Times</button>
            </>
        )
    }
}
