import React from 'react';

const Person = ({value:person}) => {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>{person.status} </p>
            <p>{person.species}</p>
            <img src={person.image} alt={person.name}/>
            <hr/>
        </div>
    );
};

export default Person;