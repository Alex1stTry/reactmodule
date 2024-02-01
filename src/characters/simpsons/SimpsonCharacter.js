import React from 'react';

const SimpsonCharacter = ({item:simpsons}) => {
    return (
        <div>

            <h2>{simpsons.name} {simpsons.surname} {simpsons.age} </h2>
            <img src={simpsons.photo} alt={simpsons.name}/>
        </div>
    );
};

export default SimpsonCharacter;