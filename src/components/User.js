import React from 'react';

const User = ({user}) => {
    const {id,name,email} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default User;