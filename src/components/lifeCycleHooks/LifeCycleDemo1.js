//?This life cycle method for only class bassed Components.

import React, { Component } from 'react'

export default class LifeCycleDemo1 extends Component {
    constructor(props) {
        super(props)//accesing parent class's Constructor
        console.log('Constructor...');//Automatically called this method
        this.state = {
            name: ' Sawant'
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps...");
        // return{name:props.name} OR
        let updatedState = { name: props.name || state.name };
        return updatedState;
        /*
        -This method is called after Constructor method() and befor render method().
        -This is a static method.
        -when you want to update state value to initial or privous state value befor render method is called. then we used this method.
        -This method gets two arguments Props and state.and return new updated Object.
        */
    }
    //!Below function is not called automaticaly if we do not inhoke it.
    f1 = () => {
        console.log('f1...');
    };
    componentDidMount() {
        console.log('ComponentDidMount...');

    }
    render() {
        console.log('Render...');//Automatically called this method
        return (
            <>
                <h5>LifeCycleDemo1</h5>
                <h6>Name is:{this.state.name}</h6>
                <button onClick={() => { this.setState({ name: ' Mahesh' }) }} className='btn btn-primary m-2'>Change Name</button>

            </>
        );
    }

}

/*
?When we created class based components how many life cycle method are there?
->Only render is alredy there.
*/

