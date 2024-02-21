import React from 'react';

const Comment = ({comment}) => {
    const {postId,id,name,body,email} = comment;
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export {Comment};