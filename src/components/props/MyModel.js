//?This is a Real time Example of prop.Children.
import React from 'react';
import PropTypes from 'prop-types'

export default function MyModel({heading='Default Heading', children}) {
    return (
        <>
            <div className="container mt-3">
                <h3>Modal Example</h3>
                <p>Click on the button to open the modal.</p>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Open modal
                </button>
            </div>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">{heading}</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {children}
                            {/* Any one can use me Thats way we use here Peops.children */}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
/* 
?When MyModel is gating a singel element only but we will send Multiple data we are gating woring like-
!Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `MyModel`, expected a single ReactElement.
*/ 
MyModel.propTypes={
    children:PropTypes.element,
    heading:PropTypes.string
}
