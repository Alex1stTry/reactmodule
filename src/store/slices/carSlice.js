import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    trigger:null,
    carUpdate:null,
}
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            state.cars = action.payload;
        },
        trigger:state=> {
            state.trigger = !state.trigger
        },
        carUpdate: (state,action)=>{
            state.carUpdate = action.payload
        }
    }
});
const {reducer: carReducer, actions} = carSlice
const carActions = {
    ...actions
}
export {carReducer, carActions}