import React, {PureComponent } from 'react'

export default class PureCompDemo1 extends PureComponent {
    // export default class PureCompDemo1 extends Component {
    state = {
        name: 'MAHESH',
    };
    changeName = () => {
        this.setState({ name: 'SAWANT MAHESH' });
    }
    render() {
        console.log('Render called...');
        return (
            <>
                <h6>Name is: {this.state.name}</h6>
                <button onClick={this.changeName} className='btn btn-success'>change Name</button>
            </>
        )
    }
}
