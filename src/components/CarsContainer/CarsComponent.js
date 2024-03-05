import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../store";
import {CarComponent} from "./CarComponent";


const CarsComponent = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setResponse(data)))
    }, [dispatch, trigger]);

    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsComponent};