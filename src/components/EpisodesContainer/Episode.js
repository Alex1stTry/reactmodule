import React from 'react';

const Episode = ({episode}) => {
    const {id, name, episode:number} = episode;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>chapter:{number}</div>
        </div>
    );
};

export {Episode};