import React from "react";

function Header(props) {
    return(
        <div>
            <h1>React Counters</h1>
            <button onClick={props.increaseCounters}>Add Counter</button>
            <button onClick={props.decreaseCounters}>Remove Counter</button>
        </div>
    )
}

export default Header;