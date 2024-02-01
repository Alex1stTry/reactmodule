import React from 'react';
import {simpsons} from "./arrays/arrays";
import SimpsonCharacter from "./characters/simpsons/SimpsonCharacter";

const App = () => {


    return (
        <div>
            {
                simpsons.map(simpsons => (
                    <SimpsonCharacter item={simpsons} key={simpsons.name} />
                ))
            }
        </div>
    );
};

export default App;