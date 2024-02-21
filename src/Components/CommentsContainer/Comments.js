import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getByPostId(postId).then(({data})=> setComments(data))
    }, [postId]);
    console.log(comments)
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};