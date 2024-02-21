import React from 'react';
import {useNavigate} from "react-router-dom";


const UserDetails = ({userDetails}) => {
    const {id, name, username, address: {city}, phone, website, email} = userDetails
    const navigate = useNavigate()
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>address: {city}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>email: {email}</div>
            <button onClick={()=>navigate('posts')}>Show Posts</button>
        </div>
    );
};

export {UserDetails};