import React from 'react';

export default (props) => (
    <div className="counter">
        <div className="clickable" onClick={props.onIncrease}>
            +
        </div>
        <div>
            {props.value}
        </div>
        <div className="clickable" onClick={props.onDecrease}>
            -
        </div>
    </div>
)
