import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);

    const [, setQuery] = useSearchParams({page: '1'})
    const prev = () => {
        setQuery(value => {
            value.set('page', (+value.get('page') - 1).toString())
            return value
        })
    }
    const next = () => {
        setQuery(value => {
            value.set('page', (+value.get('page') + 1).toString())
            return value
        })
    }
    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>Prev</button>
            <button disabled={!nextPage} onClick={next}>Next</button>
        </div>
    );
};

export {EpisodesPagination};