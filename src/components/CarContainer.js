import React, {useEffect, useState} from 'react';

import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger,setTrigger] = useState(null);
    const [carUpdate, setCarUpdate] = useState(null)
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} setCarUpdate={setCarUpdate}/>
        </div>
    );
};

export {CarContainer};