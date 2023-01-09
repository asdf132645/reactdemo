import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
    }
}

function Comment (props) {
    return (
        <div style={styles.wrapper}>
            <h1>{props.name}</h1>
            <div>{props.comment}</div>
        </div>
    );
}

export default Comment;