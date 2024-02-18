import React, {useEffect, useState} from 'react';
import {Comments} from "./Comments";
import {commentsService} from "../services/commentsService";
import {CommentForm} from "./CommentForm";

const CommentContainer = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getAll().then(({data})=> setComments(data))
    }, []);
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>

        </div>
    );
};

export {CommentContainer}