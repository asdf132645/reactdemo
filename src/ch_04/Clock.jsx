import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>title</h1>
            <h2>시각 : { new Date().toLocaleTimeString() }</h2>
        </div>
    )
}

export default Clock;