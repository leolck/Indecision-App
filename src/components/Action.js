import React from 'react';

function Action(props) {
    return (
        <React.Fragment>
            <button
                className='big-button'
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </React.Fragment>
    );
};

export default Action;