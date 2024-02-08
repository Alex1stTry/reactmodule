import React, {useEffect, useState} from 'react';
import {postService} from "../services/post.service";
import Post from "./Post";

const Posts = () => {
    let [posts,setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);


    return (
        <div>
            {
               posts.map(post => <Post post={post} key={post.id} />)
            }
        </div>
    );
};

export default Posts;