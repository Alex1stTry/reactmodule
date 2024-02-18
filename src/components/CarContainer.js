import React, {useEffect, useState} from 'react';

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../services/carService";


const CarContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarForm setTrigger={setTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} key={cars.id} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
}

export {CarContainer};