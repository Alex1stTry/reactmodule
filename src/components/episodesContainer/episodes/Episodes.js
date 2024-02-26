import React, {useEffect, useState} from 'react';

import {episodesService} from "../../../services";
import {usePageQuery} from "../../../hooks";
import {Episode} from "../episode/Episode";
import css from './Episodes.module.css'


const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev: null, next: null, results: []})
    const {page, nextPage, prevPage} = usePageQuery();
    useEffect(() => {
        episodesService.getAll(page).then(({data}) => setEpisodes(() => {
            const {info: {next, prev}, results} = data
            return {
                next, prev, results
            }
        }))

    }, [page]);
    return (
        <div>
            <div className={css.episodes}>
                {episodes.results.map(episode=><Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodes.prev} onClick={prevPage}>Prev</button>
                <button disabled={!episodes.next} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {Episodes};