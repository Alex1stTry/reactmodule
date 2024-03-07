import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";

const initialState = {
    characters: []
}
const getAll = createAsyncThunk(
    'charSlice / getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await charactersService.getById(id);
            return data
        } catch (e) {
         const error = e.response.data
           return thunkAPI.fulfillWithValue(error)
        }
    }
)
const charSlice = createSlice({
    name: 'charSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled,(state, action) => {
            state.characters = action.payload
        })
});
const {reducer: charReducer, actions} = charSlice;
const charActions = {
    ...actions,
    getAll
}
export {charReducer,charActions}