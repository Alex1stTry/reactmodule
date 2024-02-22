import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {validator} from "../validators/validator";
import {carService} from "../services/carService";

const CarForm = ({setTrigger, carUpdate, setCarUpdate}) => {
    const {reset, register, handleSubmit, setValue, formState: {isValid, errors},} = useForm(
        {
            mode: "all",
            resolver: joiResolver(validator)
        });
    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }
    const update = async (car) => {
        await carService.update(carUpdate.id, car)
        setTrigger(prev => !prev)
        setCarUpdate = null
        reset()
    }
    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand, {shouldValidate: true})
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }
    }, [carUpdate, setValue]);
    return (
        <div>
            <form onSubmit={handleSubmit(carUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carUpdate ? 'update' : 'save'}</button>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};