import React, { Component } from 'react'

export default class LifeCycleDemo3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ' Mahesh',
        };
        console.log('Constructor...');

    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps....');
    //     return state;
    // }

    componentDidMount() {
        console.log('ComponentDidMount...');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate...');
        /*
        !shouldComponentUpdate() :-
        -This method is deside when component is render again or not when state or props are change.
        -This component return true by Default.
        */
        // return false;
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML =
            "Befor the update, the Name was:- " + prevState.name;
    }

    componentDidUpdate() {
        document.getElementById('div2').innerHTML =
            "The update name is:- " + this.state.name;
    }

    changeName = () => {
        this.setState({ name: ' Prashant' })
    }

    render() {
        console.log('Render...');
        return <>
            <h3 className='text-center'>LifeCycleDemo3</h3>
            <div>Current Name is:- {this.state.name}</div>
            <button onClick={this.changeName} className='btn btn-primary m-3'>Change Name</button>

            <div id='div1'></div>
            <div id='div2'></div>
        </>
    }
}
