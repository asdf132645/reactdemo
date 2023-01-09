import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: 'coin',
        comment: 'dev',
    },
    {
        name:'two',
        comment: 'no dev',
    }
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment}/>
                    );
                })
            }
        </div>
    );
}

export default CommentList;
