import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../store";
import {CarComponent} from "./CarComponent";


const CarsComponent = () => {
    const {car} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setResponse(data)))
    }, []);

    return (
        <div>
            {car.map(car=><CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsComponent};