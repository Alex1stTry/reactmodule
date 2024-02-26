import React from 'react';

import css from './Episode.module.css'
const Episode = ({episode}) => {
    const {id,name,episode:numberOfEpisode} = episode;
    return (
        <div className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>numberOfEpisode: {numberOfEpisode}</div>
        </div>
    );
};

export {Episode};