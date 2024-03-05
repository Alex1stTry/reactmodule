import React from 'react';

const CarComponent = ({car}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarComponent};