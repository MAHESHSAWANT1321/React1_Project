import React, { Component } from 'react'

export default class FourceUpadateDemo2 extends Component {
    counter = 0;
    //Here counter is a plain class variable not a state/props variable.
    increment = () => {
        this.counter++;
        console.log(this.counter);
        // this.forceUpdate();
        //ForceUpdate() method only available in a class commponent not a functional components.It is not a good idea.
    }

    refresh = () => {
        this.forceUpdate();
        //This refresh() method is used only if you want to re-render all the components on a page.This also used only in a Class Components.
    }
    render() {
        return (
            <>
                <div>FourceUpadateDemo2</div>
                <div>Counter value is:{this.counter}</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.refresh} className='ms-1'>Refresh Data</button>

            </>
        )
    }
}
