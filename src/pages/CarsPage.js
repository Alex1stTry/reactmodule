import React from 'react';
import {CarForm, CarsComponent} from "../components";


const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
           <CarsComponent/>
        </div>
    );
};

export {CarsPage};