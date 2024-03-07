import React from 'react';
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, episode: chapter,characters} = episode;
    console.log(episode)
    const nav = useNavigate();
     const Episodes = ()=>{
        const id = characters.map(character => character.split('/').splice(-1)[0]).join(',');
        nav(`/characters/${id}`)
     }
    return (
        <div onClick={Episodes}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>chapter:{chapter}</div>
        </div>
    );
};

export {Episode};