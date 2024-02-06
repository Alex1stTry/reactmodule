import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts(value))
    }, []);
    const postInfo = (post) =>{
        setPostDetails(post)
    }
    return (
        <div>
            {posts.map(post => <Post key={post.id} item={post} postInfo={postInfo}/>)}
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default Posts;