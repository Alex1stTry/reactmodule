import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";


const CarForm = ({setTrigger, setCarForUpdate, carForUpdate}) => {
    const {setValue, reset, register, handleSubmit,formState:{isValid,errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })
    const saveCar = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }
    const updateCar = async (car) => {
        await carService.update(carForUpdate.id, car)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
        reset()
    }
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : saveCar)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};