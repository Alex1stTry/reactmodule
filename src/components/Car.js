import React from 'react';
import {carService} from "../services/carService";

const Car = ({car,setTrigger,setCarUpdate}) => {
    const {id, brand, model, price} = car
    const deleteCar = async ()=>{
       await carService.delete(id)
        setTrigger(prev => !prev)

    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {model}</div>
            <div>year: {price}</div>
            <button onClick={()=>setCarUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};