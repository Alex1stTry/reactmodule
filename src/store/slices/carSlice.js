import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    car: [],
    id: null,
    brand: null,
    price: null,
    year: null

}
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {id, brand, price, year} = action.payload;
            state.id = id
            state.brand = brand
            state.price = price
            state.year = year
        }
    }
});
const {reduce: carReducer, actions} = carSlice
const carActions = {
    ...actions
}
export {carReducer, carActions}