import React, {useEffect, useState} from 'react';

import {useLocation} from "react-router-dom";
import {PostsService} from "../../services/PostsService";
import {Post} from "./Post";

const Posts = () => {
    const [post, setPosts] = useState(null)
    const {state:{postId}} = useLocation();
    useEffect(() => {
        PostsService.getPostByCommentId(postId).then(({data})=>setPosts(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};