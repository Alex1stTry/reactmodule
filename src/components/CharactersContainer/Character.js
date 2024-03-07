import React from 'react';
import {useNavigate} from "react-router-dom";

const Character = ({character}) => {
    console.log(character)
    const{id,name,image}=character
    const nav = useNavigate();
    return (
        <div>
            <button onClick={()=>nav(-1)}>Back</button>
            <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            </div>
        </div>
    );
};

export {Character};