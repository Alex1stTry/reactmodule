import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {episodesActions} from "../../store";
import {Episode} from "./Episode";


const Episodes = () => {
    const [query,] = useSearchParams({page:'1'});
    const page = query.get('page')
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);


    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [dispatch,page]);
    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};