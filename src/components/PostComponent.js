import React from 'react';

const PostComponent = ({item}) => {
    return (
        <div>
          <h2>{item.id} {item.title}</h2>
        </div>
    );
};

export default PostComponent;