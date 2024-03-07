import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const [, setQuery] = useSearchParams({page: '1'})
    const {prevPage,nextPage} = useSelector(state => state.episodes);
    const prev = () => {

        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
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