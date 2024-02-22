import React from 'react';
import {Car} from "./Car";

const Cars = ({cars,setTrigger,setCarUpdate}) => {
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setTrigger={setTrigger} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {Cars};