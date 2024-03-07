import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    episodes: [],
    nextPage: null,
    prevPage: null,

}
const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page)
            return data
        } catch (e) {
            const error = e.response.data
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
console.log(results)
            })
});
const {reducer: episodesReducer, actions} = episodesSlice
const episodesActions = {
    ...actions,
    getAll
}
export {episodesReducer, episodesActions}