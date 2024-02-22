import {Comment} from "./Comment";
import React from "react";


const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
};

export {Comments};