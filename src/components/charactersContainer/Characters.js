import React, {useEffect, useState} from 'react';

import {characterService} from "../../services";
import {useNavigate, useParams} from "react-router-dom";
import {Character} from "./Character";
import css from './Characters.module.css'
import {useAppContext} from "../../hooks/useAppContext";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {id} = useParams();
    const nav = useNavigate();
    const [,setName] = useAppContext();
    const back = ()=>{
        nav(-1)
        setName(null)

    }
    useEffect(() => {
        characterService.getById(id).then(({data})=>setCharacters(data))
    }, [id]);
    return (
        <div >
            <div className={css.Characters}>
            <button onClick={back}>Back</button>
            </div>
            <div className={css.Characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};