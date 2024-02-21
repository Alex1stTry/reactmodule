import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {title,id} = post
    const navigate = useNavigate();
    return (
        <div>
            <div>title: {title}</div>
            <button onClick={()=> navigate(`/postDetails/${id}`)}>show details</button>
            <hr/>
        </div>
    );
};

export {Post};