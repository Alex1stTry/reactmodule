import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../store";

const CarForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        setValue,
        formState: {isValid, errors}
    } = useForm()
    const dispatch = useDispatch();

    const save = async (data) => {
        await carService.create(data)
        dispatch(carActions.trigger())
        reset()
    }
    const update = async (car) => {
        await carService.update(carUpdate.id, car)
        dispatch(carActions.trigger())
        dispatch(carActions.carUpdate(null))
        reset()
    }
    const {carUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand,)
            setValue('price', carUpdate.price,)
            setValue('year', carUpdate.year,)
        }
    }, [carUpdate,setValue, dispatch]);
    return (
        <div>
            <form onSubmit={handleSubmit(carUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>{carUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CarForm};