import React from 'react';

import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../hooks/useAppContext";


const Episode = ({episode}) => {
    const {id, name, episode: numberOfEpisode, characters} = episode;
    const nav = useNavigate();
    const [, setName] = useAppContext();
    const toCharacters = () => {
        const id = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        nav(`/characters/${id}`)
        setName(name)
    }
    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>numberOfEpisode: {numberOfEpisode}</div>
        </div>
    );
};

export {Episode};