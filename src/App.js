import React from 'react';
import {persons} from "./array/array";
import Person from "./component/Person";

const App = () => {
    return (
        <div>
            {
                persons.map(person => (
                   <Person value={person} key={person.id}/>
                ))
            }
        </div>
    );
};

export default App;