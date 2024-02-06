import React from 'react';

const Post = ({item,postInfo}) => {
 const {id,title} = item

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>postInfo(item)}>show info</button>
            <hr/>
        </div>
    );
};

export default Post;