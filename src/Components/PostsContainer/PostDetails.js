import React from 'react';
import {useNavigate} from "react-router-dom";

const PostDetails = ({postDetails}) => {
    const {title,body,id,userId} = postDetails
    const navigate = useNavigate()
    return (
        <div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <button onClick={()=>navigate('comments')}>Show Comments</button>
        </div>
    );
};

export {PostDetails};