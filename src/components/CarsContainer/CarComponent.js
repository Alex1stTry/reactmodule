import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../store";

const CarComponent = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useDispatch();
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.carUpdate(car))}>Update</button>
            <button>Delete</button>
        </div>
    );
};

export {CarComponent};