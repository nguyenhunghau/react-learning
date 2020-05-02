import React from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function Clock(props) {
    const second = props.second;
    var changeTime = props.changeTime;

    return (
        <div>
            <span>{second}</span>
            <button onClick={changeTime}>CLick here</button>
        </div>
    );
}

export default Clock;