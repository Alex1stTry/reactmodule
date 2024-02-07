import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../services/service.posts.api";
import PostComponent from "./PostComponent";


const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts
            .then(value => setPosts(value))
    },[]);
    return (
        <div>
            {
                posts.map(post => <PostComponent item={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;