import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {charActions} from "../../store";
import {Character} from "./Character";

const Characters = () => {
    const {id} = useParams()
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(charActions.getAll({id}))
    }, [dispatch,id]);
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character} />)}
        </div>
    );
};
export {Characters}