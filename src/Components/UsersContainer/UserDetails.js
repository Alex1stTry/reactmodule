import React from 'react';

const UserDetails = ({userDetails}) => {
    const {id, name, username, address: {city}, phone, website, email} = userDetails
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>address: {city}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {UserDetails};