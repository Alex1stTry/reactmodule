import React from 'react';

const Post = ({post}) => {
    const {id,title} = post
    return (
        <div>
           <h2>{id} {title}</h2>
        </div>
    );
};

export default Post;